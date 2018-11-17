import React from 'react';
import {
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

export default class OffersModal extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const stationDetails = this.props.navigation.getParam('stationDetails')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
