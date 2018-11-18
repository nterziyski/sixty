import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors'
import FavoriteStore from '../components/FavoriteStore'

import { Container, Header, Content, Accordion } from "native-base";

const dataArray = [
  { title: "Driver Profile", content: "Inclination: 45°\n  \n Mirror-1: 23 \n Mirror-2: 9 \n Mirror-3: 26 \n \n Distance: 4 \n  \n Favorite Radio Station: Bayern 3" },
  { title: "Scheduled Cars ", content: "VW Polo scheduled weekly until June 2019" },
  { title: "Your favorites", content: "No cars or rides were bookmarked" },
  { title: "Payment Options", content: "Sixt app is integrated with your Apple pay." },
];

export default class MeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  favouritesStore = FavoriteStore

  _renderContent = (obj) => {
    if (obj.content == "No cars or rides were bookmarked" && this.favouritesStore.store.length) {
      return (
      <FlatList
      data={this.favouritesStore.store}
      renderItem={({item}) => <React.Fragment>
        <Text style={{ fontSize: 20, marginBottom: 5 }}>{item.carGroupInfo.modelExample.name}</Text>
        <View key={item.id} style={{ width: '100%', height: 100, marginBottom: 20, flexDirection: "row" }}>
          <Image source={{ uri: item.vehicleGroupInfo.modelExample.imageUrl}} style={{width: 200, height: 100}} />
          <View style={{ flexDirection: 'column', padding: 10, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>{`${item.prices.dayPrice.amount.value} ${item.prices.dayPrice.amount.currency}`}</Text>
          </View>
        </View>
      </React.Fragment>}
    />)
    } else {
      return <Text>{`${obj.content}`}</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/avatar.jpg')
              }
              style={styles.welcomeImage}
            />
            <View style={styles.welcomeText} >
                <Text style={styles.welcomeText}> Hello, Luiz</Text>
                <Text style={styles.welcomeText}> You own 1345 sixt-coins</Text>
            </View>
          </View>

          <View style={styles.tabBarInfoContainer}>
          <Accordion
               dataArray={dataArray}
               headerStyle={{ backgroundColor: Colors.sixtyOrange }}
               contentStyle={{ backgroundColor: Colors.sixtyWhite }}
               renderContent={this._renderContent}
             />
        </View>
        <View style={styles.questionUser}> 
            <Text style={styles.questionText}> How good was your experience with your last Sixt car? </Text>
            <View style={styles.emoticon}>
              <View style={styles.emoticonBox}><Text style={styles.emoticonText}>🤨</Text></View>
              <View style={styles.emoticonBox}><Text style={styles.emoticonText}>😌</Text></View>
              <View style={styles.emoticonBox}><Text style={styles.emoticonText}>😁</Text></View>
            </View>
        </View>
        </ScrollView>
      </View>
          )
        }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.sixtyWhite,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 10,
    borderWidth: 10.5,
    borderColor: 'transparent',
  },
  welcomeImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginLeft: -12,
    borderWidth: 5.,
    borderColor: Colors.sixtyOrange,
    borderRadius: 120/2,
  },
  welcomeText: {
    paddingTop: 12,
    paddingLeft: 5,
    color: Colors.sixtyBlack,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    shadowColor: Colors.sixtyBlack,
    shadowOffset: { height: -5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    backgroundColor: Colors.sixtyWhite,
    paddingVertical: 15,
  },
  questionUser: {
      textAlign: 'center',
      paddingLeft: 'auto',
      paddingRight: 'auto',
      flexDirection: 'column',
      flex: 1,
      padding: 10,
  },
  emoticon: {
     flexDirection: 'row',
     flex: 1,
     justifyContent: 'center',
  },
  emoticonBox: {
      flex: 1,
  },
  questionText: {
    fontSize: 18,
    color: Colors.sixtyBlack,
    lineHeight: 20,
  },
  emoticonBox: {
      width: 100,
      height: 100,
  },
  emoticonText: {
      fontSize: 50,
  }
});
