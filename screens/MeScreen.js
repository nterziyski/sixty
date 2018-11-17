import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors'

import { Container, Header, Content, Accordion } from "native-base";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class MeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
          <Content padder>
            <Accordion
               dataArray={dataArray}
               headerStyle={{ backgroundColor: Colors.sixtyOrange }}
               contentStyle={{ backgroundColor: Colors.sixtyWhite }}
             />
           </Content>
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
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
