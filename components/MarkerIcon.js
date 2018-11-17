import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'

export default class MarkerIcon extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.hasFavoriteCars !== this.props.hasFavoriteCars
    }

    render() {
        var styles = {
            width: 40,
            height: 40,
            borderRadius: 5
        }

        if (this.props.hasFavoriteCars) {
            styles.borderWidth = 3
            styles.borderColor = '#FF5F00' // sixt orange
        }

        return (
                <Image source={require('../assets/images/sixt_marker.png')} style={styles}/>
            )
        }
}

MarkerIcon.defaultProps = { hasFavoriteCars: false }