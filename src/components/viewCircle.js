import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail,Body, Button, Left, Title, Right, Card, CardItem, Icon, Tab, Tabs } from 'native-base';
import { StyleSheet, Text, View, Image } from 'react-native';


class ViewCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <Container>
                <Content>

                    <Card>
                        <CardItem>
                            <Thumbnail square size={80} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrL-ZlUj58aYyJfEywedRNWp7r3NFmPbwdrKwBWniX6ZvbM4cO' }} />
                          <CardItem style={{flexDirection:'column'}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Zeshan</Text>
                              <Text ><Text>  <Icon style={{color:'red', fontSize:14}} name='star' /></Text>Circle Owner</Text>
                        </CardItem>
                        </CardItem>
                    </Card>
                    <Card>
                       <CardItem style={{alignItems:'center'}}>
                    <Icon style={{color : 'red' ,fontSize:50}} name='add'  />
                    <Text style={{fontSize:20}}> invite New Members</Text>
                 
                    </ CardItem>
                       </ Card>

                    </Content>
                      <Button style={{alignSelf:'center'}} rounded success>
                        <Text>Leave Circle</Text>
                    </Button>
               


            </Container>
        )
    }
}

export default ViewCircle;