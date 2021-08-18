import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {
  magnetometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import LPF from 'lpf';
import compass from '../../assets/images/compass.png';
import {BgImage} from '../../component/ImageContainer';

const {height, width} = Dimensions.get('window');
export default class QiblaScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this._animeRotation = new Animated.Value(0);
  }
  componentDidMount() {
    this.startAnimation();
  }
  startAnimation() {
    Animated.timing(this._animeRotation, {
      toValue: this.props.magn, //<-- What put here?
      duration: 1000,
    }).start(() => {
      this.startAnimation();
    });
  }
  render() {
    var interpolatedRotateAnimation = this._animeRotation.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View>
        <Animated.View
          style={[
            // styles.box,
            {transform: [{rotate: interpolatedRotateAnimation}]},
          ]}>
          <Image
            style={{flex: 1}}
            source={require('../../assets/images/kibla.png')}
          />
        </Animated.View>
      </View>
    );
  }
}
