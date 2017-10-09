import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import flagBlueImg from '../images/add.png'
import flagPinkImg from '../images/add.png'
import { Container, Header, Content, Button, Text, Card, CardItem, Body, Icon, Left, Right, Title } from 'native-base';

import {
  AppRegistry,
  StyleSheet, Dimensions,

  View, TouchableOpacity, Image
} from 'react-native';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.8615;
const LONGITUDE = 67.0099;
const LATITUDE_DELTA = 0.06;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
const window = Dimensions.get('window');

export default class Maps extends Component {

  constructor(props) {
    super(props);

    this.state =
      {
        marker1: true,
        SPACE: 0.01,
        error: null,
        mapSnapshot: null,
        takeSnapshot: {},
        region: {
          latitude: 0,
          longitude:0,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
          Address: null
        },



      }

    this.onRegionChange = this.onRegionChange.bind(this)
    this.openSearchModal = this.openSearchModal.bind(this)
    this.onLogout = this.onLogout.bind(this)
  }
  onLogout() {
    this.props.logoutReq()
  }
  openSearchModal() {
    console.log('jkjkj')
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
        console.log('place', place)
        this.setState({
          region: {
            latitude: place.latitude,
            longitude: place.longitude,
            latitudeDelta: 0.06,
            longitudeDelta: 0.06,

          }
        })

      })
      .catch(error => console.log(error.message));
  }

  componentDidMount() {
    console.log('component')
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('postion', position)

        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          },
        });
      },
      (error) => (error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }



  onRegionChange(region) {
    this.setState({ region });
  }


  render() {

    const { latitude } = this.state.region
    const { longitude } = this.state.region

    return (
      <Container style={styles.container}>


        <MapView style={styles.map}
          ref={ref => { this.map = ref; }}
          provider="google"
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          followsUserLocation={true}
          loadingEnabled={true}
          toolbarEnabled={true}
          zoomEnabled={true}
          rotateEnabled={true}
          cameraPosition={{ auto: true, zoom: 10 }}
          scrollGestures={true}
          zoomGestures={true}
          tiltGestures={true}
          rotateGestures={true}
          consumesGesturesInView={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          compassButton={true}
          myLocationButton={true}
          indoorPicker={true}
          allowScrollGesturesDuringRotateOrZoom={true}

          region={this.state.region}

          onRegionChange={this.onRegionChange}
        >
          <MapView.Marker
            coordinate={this.state.region}
            title={"title"}
          >
          </MapView.Marker>


        </MapView>
        {/* <Button iconLeft
             style={styles.btn}
             >
            <Icon onPress={Actions.createCircleCon()} style={{color :'red'}} name='add' />
            <Text style={{color:'black'}}>Create circle</Text>
          </Button> */}

        <Button style={{ marginBottom: 80, marginLeft: 270 }}
          rounded light>
          <Icon style={{ color: 'blue' }} name='add' />
        </Button>

        <TouchableOpacity
          style={styles.button}

        >
          <Button style={{ alignContent: 'center' }}
            onPress={() => this.openSearchModal()}
            rounded light>
            <Icon name='search' />
            <Text>search Places</Text>

          </Button>
        </TouchableOpacity>


        <Text>Latitude: {latitude}</Text>
        <Text>Longitude: {longitude}</Text>

        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}

        {/*<Button style={{ marginLeft: 140, backgroundColor: 'transparent' }}
          onPress={this.onLogout}
        ><Text>LogOut</Text></Button>*/}

      </Container>
    );
  };
}



const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: null,
    width: null,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: window.height * 0.6,
    marginTop: 100


  },
  marker: {
    marginLeft: 46,
    marginTop: 33,
    fontWeight: 'bold',
  },
  crd: {
    marginTop: -300,
    marginLeft: -30
  }, header: {
    width: window.width * 1,
    marginTop: -80
    //backgroundColor:'cyan'
    // height: window.height * 0.9,

  },
  card: {
    height: 60,
    flex: 0,
    backgroundColor: 'transparent'

  }, btn: {
    marginBottom: 240,
    width: 370,
    backgroundColor: 'transparent',
    flexDirection: 'row'
    // fontColor: 'black'
  }
});

