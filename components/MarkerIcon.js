import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'

export default class MarkerIcon extends React.Component {
    render() {
        var styles = {
            postContainer: null,
            userInformations: null,
            status: null
        }

        return (
                <Image source={require('../assets/images/sixt_marker.png')} style={{width: 30, height: 30}}/>
            )
        }
}