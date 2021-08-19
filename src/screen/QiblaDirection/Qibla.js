import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
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
  constructor() {
    super();
    this.state = {
      magnetometer: '0',
    };
    LPF.init([]);
    LPF.smoothing = 0.3;
  }

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  };

  _subscribe = async () => {
    setUpdateIntervalForType(SensorTypes.magnetometer, 100);
    this._subscription = magnetometer.subscribe(
      sensorData => this.setState({magnetometer: this._angle(sensorData)}),
      error => console.log('The sensor is not available'),
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.unsubscribe();
    this._subscription = null;
  };

  _angle = magnetometer => {
    let angle = 0;
    if (magnetometer) {
      let {x, y, z} = magnetometer;
      if (Math.atan2(y, x, z) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    return Math.round(LPF.next(angle));
  };

  _direction = degree => {
    if (degree >= 22.5 && degree < 67.5) {
      return 'North East';
    } else if (degree >= 67.5 && degree < 112.5) {
      return 'East';
    } else if (degree >= 112.5 && degree < 157.5) {
      return 'South East';
    } else if (degree >= 157.5 && degree < 202.5) {
      return 'South';
    } else if (degree >= 202.5 && degree < 247.5) {
      return 'South West';
    } else if (degree >= 247.5 && degree < 292.5) {
      return 'West';
    } else if (degree >= 292.5 && degree < 337.5) {
      return 'North West';
    } else {
      return 'North';
    }
  };

  // Match the device top with pointer 0° degree. (By default 0° starts from the right of the device.)
  _degree = magnetometer => {
    return magnetometer - 90 >= 0
      ? Math.round(parseFloat(magnetometer - 90))
      : Math.round(parseFloat(magnetometer + 271));
  };

  render() {
    return (
      <Grid style={{backgroundColor: 'transparent', marginTop: 80}}>
        {/* <Row style={{alignItems: 'center'}} size={0.9}>
          <Col style={{alignItems: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: height / 26,
                fontWeight: 'bold',
              }}>
              {this._direction(this._degree(this.state.magnetometer))}
            </Text>
          </Col>
        </Row> */}

        {/* <Row style={{alignItems: 'center'}} size={0.1}>
          <Col style={{alignItems: 'center'}}>
            <View style={{width: width, alignItems: 'center', bottom: 0}}>
              <Image
                source={require('../../assets/images/qibla.jpg')}
                style={{
                  height: height / 26,
                  resizeMode: 'contain',
                  transform: [{rotate: 70 - this.state.magnetometer + 'deg'}],
                }}
              />
            </View>
          </Col>
        </Row> */}

        <Row style={{alignItems: 'center'}} size={2}>
          <Text
            style={{
              color: '#fff',
              fontSize: height / 27,
              width: width,
              position: 'absolute',
              textAlign: 'center',
            }}>
            {this._degree(this.state.magnetometer)}°
          </Text>

          <Col
            style={{
              alignItems: 'center',
              transform: [{rotate: 60 - this.state.magnetometer + 'deg'}],
            }}>
            <Image
              source={require('../../assets/images/qibla.png')}
              style={{
                height: height / 22,
                resizeMode: 'contain',
                top: 119,
                left: -90,
                zIndex: 1,
                transform: [{rotate: '-68deg'}],
              }}
            />
            <Image
              source={require('../../assets/images/kibla.png')}
              style={{
                height: width - 80,
                justifyContent: 'center',
                alignItems: 'center',
                resizeMode: 'contain',
                // transform: [{rotate: 70 - this.state.magnetometer + 'deg'}],
                // transform: [{rotate: 250 + 'deg'}],
              }}
            />
          </Col>
        </Row>

        <Row style={{alignItems: 'center', marginTop: -30}} size={1}>
          <Col style={{alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
              West Side Ave, Jersey City
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#a7c829',
                  fontSize: 18,
                  fontWeight: '400',
                  paddingRight: 10,
                }}>
                {this._degree(this.state.magnetometer)}° Degree
              </Text>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: '400'}}>
                from {this._direction(this._degree(this.state.magnetometer))}
              </Text>
            </View>
          </Col>
        </Row>
      </Grid>
    );
  }
}
