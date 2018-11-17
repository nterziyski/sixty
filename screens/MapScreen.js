import React from 'react';
import { MapView } from 'expo' 
import { StyleSheet, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 48.35397931,
        longitude: 11.78138889,
        latitudeDelta: 0.1122,
        longitudeDelta: 0.1121,
      }
    }
    }

  static navigationOptions = {
    title: 'Map',
    header: null,
  };
  
  onRegionChange = (region) => {
    this.setState({ region });
  }
  
  openMenu = () => {
    Alert.alert('1')
  }

  render() {
    const { viewStyles, iconContainer } = styles
    return (
      <View style={viewStyles}>
        <View style={iconContainer} >
          <Ionicons onPress={this.openMenu} name="md-menu" size={32} color="black" />
        </View>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        />
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
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 10,
    borderRadius: 3,
  }
});
