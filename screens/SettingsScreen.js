import React from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  Dimensions,
  FlatList
} from 'react-native';
import { Toast, Button } from 'native-base'
import FavoriteStore from '../components/FavoriteStore'

const { height } = Dimensions.get('window')

export default class Booked extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    unlockedCars: []
  }

  favouritesStore = FavoriteStore

  unlockCar = car => {
    const onBook = this.props.navigation.getParam('onBook')
    Toast.show({
      text: "Start unlocking...",
      textStyle: { color: "#FF5F00" },
      duration: 2000,
      position: 'top',
      onClose: () => Toast.show({
        text: "Check for favorite car setup...",
        textStyle: { color: "#FF5F00" },
        duration: 3000,
        position: 'top',
        onClose: () => Toast.show({
          text: "Adjust the driver's seat position...",
          textStyle: { color: "#FF5F00" },
          duration: 3000,
          position: 'top',
          onClose: () => Toast.show({
            text: "Done. Unlocked. Good drive!",
            textStyle: { color: "#FF5F00" },
            duration: 3000,
            position: 'top',
            onClose: () => {
              this.setState(prevState => ({
                unlockedCars: [...prevState.unlockedCars, car.id]
              }))
            } 
          })
        })
      })
    })
  }

  render() {
    const offers = this.favouritesStore.store
    return (
    <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20, paddingBottom: 10, backgroundColor: '#FF5F00' }}>
      <FlatList
        data={offers}
        extraData={this.state}
        renderItem={({item}) => <React.Fragment>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>{item.carGroupInfo.modelExample.name}</Text>
          <View key={item.id} style={{ width: '100%', height: 100, marginBottom: 20, flexDirection: "row" }}>
            <Image source={{ uri: item.vehicleGroupInfo.modelExample.imageUrl}} style={{width: 200, height: 100}} />
            <View style={{ flexDirection: 'column', padding: 10, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
              <Button transparent block color="#191919" onPress={() => this.unlockCar(item)}><Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.state.unlockedCars.includes(item.id) ? "Unlocked" : "Unlock now"}</Text></Button>
            </View>
          </View>
        </React.Fragment>}
      />
      </View>
    )
  }
}
