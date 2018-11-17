import React from 'react';
import { MapView } from 'expo' 
import { StyleSheet, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MarkerIcon from '../components/MarkerIcon'

import Colors from '../constants/Colors';

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

  componentDidMount() {
    var url = `https://web-api.orange.sixt.com/v1/locations/geo?latitude=${this.state.region.latitude}&longitude=${this.state.region.longitude}`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ sixtMarkers: data }));
  }
  
  onRegionChange = (region) => {
    this.setState({ region });
  }
  openMenu = () => {
    Alert.alert('Sneaky, Sneaky!')
  }

  render() {
    const { viewStyles, iconContainer } = styles
    return (
      <View style={viewStyles}>
        <View style={iconContainer} >
          <Ionicons onPress={this.openMenu} name="md-menu" size={32} color={Colors.sixtyOrange} />
        </View>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChange={this.onRegionChange}>
          { this.state.sixtMarkers && this.state.sixtMarkers.map( marker => {
            return <MapView.Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.subtitle}
            >
            <MarkerIcon/>
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
  iconContainer: {
    position: 'absolute',
    top: 50,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingHorizontal: 10,
    borderRadius: 5,
  }
});
