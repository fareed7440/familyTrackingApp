import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Platform,
    Linking
} from 'react-native';
import { Container, Card, CardItem, Content, Left, Text, Body, Right, Thumbnail, Item, Icon, Button, List, ListItem } from "native-base";

const CreateCircle = (props) => {
    

    return (
    <Container>
       
    </Container>
    )
}
const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    },
    headerStyle: {
        backgroundColor: (Platform.OS === 'ios') ? '#F8F8F8' : "#22a3d7",
    },
    avatar: {
        flex: 1, justifyContent: "flex-start", paddingTop: 10,
        alignItems: "center", height: 150, width: "100%"
    },
    name: {
        // color: "white",
        textAlign: "center"
    },
    listStyle: {
        backgroundColor: "rgba(255,255,255,0.3)",
        margin: 5,
        width: window.width * 0.98,

    },
     listStyle2: {
        backgroundColor: "rgba(255,255,255,0.3)",
        margin: 5,
        width: window.width * 0.9,

    }
})
export default CreateCircle;
