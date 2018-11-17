import React from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  Image,
  Dimensions,
  FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window')

export default class OffersModal extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {}

  componentDidMount() {    
    const stationDetails = this.props.navigation.getParam('stationDetails')
    const url = `https://web-api.orange.sixt.com/v1/rentaloffers/offers?pickupStation=${stationDetails.id}&returnStation=${stationDetails.id}&pickupDate=2018-12-17T12:00:00&returnDate=2018-12-19T09:00:00&areaCode=de&vehicleType=car`
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ offers: data.offers }));
  }

  bookCar = car => {
    this.props.navigation.goBack()
  }

  render() {
    const { offers } = this.state
    return (<View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20, paddingBottom: 10, backgroundColor: '#FF5F00' }}>
      <Button color="#191919" style={{ padding: 5 }} onPress={() => this.props.navigation.goBack()} title="Back to Map" />
      <FlatList
        data={offers}
        renderItem={({item}) => <React.Fragment>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>{item.carGroupInfo.modelExample.name}</Text>
          <View key={item.id} style={{ width: '100%', height: 100, marginBottom: 20, flexDirection: "row" }}>
            <Image source={{ uri: item.vehicleGroupInfo.modelExample.imageUrl}} style={{width: 200, height: 100}} />
            <View style={{ flexDirection: 'column', padding: 10, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
              <Text style={{ fontSize: 20 }}>{`${item.prices.dayPrice.amount.value} ${item.prices.dayPrice.amount.currency}`}</Text>
              <Button color="#191919" title="Book" onPress={this.bookCar} />
            </View>
          </View>
        </React.Fragment>}
        ListEmptyComponent={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: height - 120 }}><Text style={{ fontSize: 30, fontWeight: 'bold' }}>Fetching offers...</Text></View>}
      />
      </View>
    )
  }
}
