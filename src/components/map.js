import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import flagBlueImg from '../images/add.png'
import flagPinkImg from '../images/add.png'
import { Container, Header, Content, Button, Text, Body, Icon, Left, Right, Title,Tab, Tabs  } from 'native-base';
import {Card} from './card'
import {CardSection} from './cardSection'
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
       // marker1: true,
        SPACE: 0.01,
        error: null,
        mapSnapshot: null,
        takeSnapshot: {},
        region: {
          latitude:24.946218,
          longitude:67.005615,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
          Address: null,
          name : '',
          address:'',

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
            name: place.name,
            address :place.address,
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
     const { name } = this.state.region
      const { address } = this.state.region

    return (
      <Container style={styles.container}>


        <MapView style={styles.map}
          ref={ref => { this.map = ref; }}
          provider="google"
          showsUserLocation={true}
         

          region={this.state.region}

          onRegionChange={this.onRegionChange}
        >
          <MapView.Marker
            coordinate={this.state.region}
            title={"title"}
          >
          </MapView.Marker>


        </MapView>
       
          <Button 
          onPress={() => Actions.createCircleCon()}
          style={{ marginBottom: 320, marginLeft: 30,width:300,height:60 }}
          rounded light>
          <Icon style={{ color: 'red' }} name='add' />
           <Text>Create Circle</Text>

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
        <Text>name: {name}</Text>
        <Text>address: {address}</Text>

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
        top: 100,
      //  left: 0,
       // right: 0,
      //  bottom: 0,
      //  flex: 1,
      //  width: '100%',
        height: window*0.8,


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
    height: 120,
    marginTop: -200,
    flex: 1,
    

  }, btn: {
    marginBottom: 240,
    width: 370,
    backgroundColor: 'transparent',
    flexDirection: 'row'
    // fontColor: 'black'
  }
});

