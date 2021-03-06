import React from 'react';
import { MapView } from 'expo' 
import { StyleSheet, View, Alert } from 'react-native';
import MarkerIcon from '../components/MarkerIcon'
import FavoriteStore from '../components/FavoriteStore';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 48.35397931,
        longitude: 11.78138889,
        latitudeDelta: 0.1122,
        longitudeDelta: 0.1121,
      },

      sixtMarkers: null
    }
  }

  static navigationOptions = {
    title: 'Map',
    header: null,
  };

  favouritesStore = FavoriteStore

  componentDidMount() {
    var url = `https://web-api.orange.sixt.com/v1/locations/geo?latitude=${this.state.region.latitude}&longitude=${this.state.region.longitude}`
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ sixtMarkers: data }));
  }

  updateAfterBook = () => {
    this.forceUpdate()
  }

  render() {
    const { navigation } = this.props
    const { viewStyles } = styles
    return (
      <View style={viewStyles}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}>
          { this.state.sixtMarkers && this.state.sixtMarkers.map( marker => {
            return <MapView.Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.subtitle}
            onPress={() => navigation.navigate('OffersModal', { stationDetails: marker, onBook: this.updateAfterBook })}
            >
            <MarkerIcon hasFavoriteCars={this.favouritesStore.store.length > 0 && marker.id == "S_11"}/>
            </MapView.Marker>
          })}
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  viewStyles: {
    position: 'relative',
    flex: 1
  },
});
