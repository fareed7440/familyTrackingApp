import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail,Body, Button, Left, Title, Right, Card, CardItem, Icon, Tab, Tabs } from 'native-base';
import { StyleSheet, Text, View, Image } from 'react-native';


class SendCode extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <Container>
               
                    <Text style ={{fontSize : 14,fontFamily:'strong', marginTop:80,alignSelf:'center'}}>share this  code with poeple you want </Text>
                     <Text  style ={{fontSize : 14,fontFamily:'strong',alignSelf:'center'}}>to join your Circle </Text>

           
                        
                       <Item rounded style={{marginTop:20}}>
            <Input style={{justifyContent:'center',}} placeholder='Enter code..'/>
          </Item>
                        
                   <Button style={{alignSelf:'center' ,backgroundColor:'#F43092',marginTop:100,width:180}} rounded success>
                        <Text style={{color : 'white', marginLeft:50}}>Send</Text>
                    </Button>
                     <Text style ={{fontSize : 14,fontFamily:'strong', marginTop:20,alignSelf:'center'}}>note : share ypur code loud or  </Text>
                     <Text  style ={{fontSize : 14,fontFamily:'strong',alignSelf:'center'}}>in message </Text>


               

                   
                      


            </Container>
        )
    }
}

export default SendCode;