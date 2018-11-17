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

export default class OffersModal extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {}

  favouritesStore = FavoriteStore

  componentDidMount() {    
    const stationDetails = this.props.navigation.getParam('stationDetails')
    const url = `https://web-api.orange.sixt.com/v1/rentaloffers/offers?pickupStation=${stationDetails.id}&returnStation=${stationDetails.id}&pickupDate=2018-12-17T12:00:00&returnDate=2018-12-19T09:00:00&areaCode=de&vehicleType=car`
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ offers: data.offers }));
  }

  bookCar = car => {
    const onBook = this.props.navigation.getParam('onBook')
    this.favouritesStore.addCarToFavourites(car)
    this.props.navigation.navigate("MapStack", { update: true })
    onBook()
    Toast.show({
      text: "Booking successfull!",
      textStyle: { color: "#FF5F00" },
      buttonText: "OK",
      duration: 4000,
      position: 'top'
    })
  }

  render() {
    const { offers } = this.state
    return (<View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20, paddingBottom: 10, backgroundColor: '#FF5F00' }}>
      <Button transparent style={{ padding: 5 }} onPress={() => this.props.navigation.goBack()} block><Text>Back to Map</Text></Button>
      <FlatList
        data={offers}
        renderItem={({item}) => <React.Fragment>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>{item.carGroupInfo.modelExample.name}</Text>
          <View key={item.id} style={{ width: '100%', height: 100, marginBottom: 20, flexDirection: "row" }}>
            <Image source={{ uri: item.vehicleGroupInfo.modelExample.imageUrl}} style={{width: 200, height: 100}} />
            <View style={{ flexDirection: 'column', padding: 10, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
              <Text style={{ fontSize: 20 }}>{`${item.prices.dayPrice.amount.value} ${item.prices.dayPrice.amount.currency}`}</Text>
              <Button transparent block color="#191919" onPress={() => this.bookCar(item)}><Text style={{ fontSize: 20, fontWeight: 'bold' }}>Book</Text></Button>
            </View>
          </View>
        </React.Fragment>}
        ListEmptyComponent={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: height - 120 }}><Text style={{ fontSize: 30, fontWeight: 'bold' }}>Fetching offers...</Text></View>}
      />
      </View>
    )
  }
}
