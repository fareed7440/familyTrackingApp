import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Body, Button, Left, Title, Right,Footer,FooterTab, Icon, View } from 'native-base';
import { StyleSheet, Text, Image,Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
const window = Dimensions.get('window');
class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
       <Image
                source={require('../images/rr.png')}
                style={styles.container}>
           
        <Content>
             <Header style={styles.header}>
          <Left/>
          <Body>
            <Title>TRACKING APP</Title>
          </Body>
          <Right />
        </Header>
            </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical
             onPress={() => Actions.signupCon()}
            >
              <Icon name="person" />
              <Text>sign Up</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Image>
        )    

    }
}


export default Home;
const styles = StyleSheet.create({
 container: {
        flex: 1,
    width: window.width * 1,
        height: window.height * 0.9,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
         width: window.width * 1,
         //backgroundColor:'cyan'
       // height: window.height * 0.9,

    }

})
