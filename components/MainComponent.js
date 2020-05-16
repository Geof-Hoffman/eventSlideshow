import React, { Component } from 'react';
import Landing from './LandingComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PictureGallery from './PictureGalleryComponent';



class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <Landing />
                <PictureGallery />
            </View>
        );
    }
}

export default Main;

