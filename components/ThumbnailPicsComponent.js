import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Image } from 'react-native-animatable';

const WIDTH = Dimensions.get('window').width;

export default class ThumbnailPics extends Component {
  render() {
    const { uri, index, onPress } = this.props;
    return (
      <Button
        onPress={() => onPress(index)}
        style={{
          backgroundColor: 'transparent',
          borderRadius: 0,
          height: 80,
          width: WIDTH / 3,
        }}
      >
        <Image
          animation={'bounceIn'}
          delay={100 * index}
          duration={500}
          source={ uri }
          style={{
            height: 80,
            left: 0,
            position: 'absolute',
            resizeMode: 'cover',
            top: 0,
            width: WIDTH / 3,
          }}
        />
      </Button>
    );
  }
}
ThumbnailPics.propTypes = {
  uri: PropTypes.string,
  index: PropTypes.number,
  onPress: PropTypes.func,
};

