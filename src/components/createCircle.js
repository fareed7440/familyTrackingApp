import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Body, Button, Left, Title, Right, Icon, Tab, Tabs } from 'native-base';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './card'
import { CardSection } from './cardSection'
import ViewCircle from './viewCircle'
import SendCode from './codeView.'
class CreateCircle extends Component {
    titleStyle
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: '',
            CircleName: '',




        }
        this.handleForm = this.handleForm.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })

    }
    handleForm = (e) => {
        e.preventDefault();
        let name = this.state.name;
        let id = this.state.id;
        let obj = {
            name: name, id: id

        }

        this.props.circleData(obj)

    }

    render() {
        return (
            <Container>
                <Content>


                    <Tabs initialPage={1}>

                        <Tab heading="Send Code">
                           <SendCode/>

                        </Tab>
                        <Tab heading="Circle">
                             <View><Text style={{ alignSelf: 'center', fontSize: 20, color: '#1eb3cd' }}>Enter Your Circle Name</Text></View>

                            <Form onSubmit={this.handleForm}>
                                <Item floatingLabel>
                                    <Label>Enter circle Name</Label>
                                    <Input
                                        style={styles.inpt}
                                        value={this.state.value}
                                        onChangeText={(name) => this.setState({ name })}
                                    />
                                </Item>

                                <Item floatingLabel>
                                    <Label> Enter Circle id</Label>
                                    <Input

                                        style={styles.inpt}
                                        value={this.state.value}
                                        onChangeText={(id) => this.setState({ id })}

                                    />
                                </Item>
                                <Button
                                    type='submit'
                                    onPress={this.handleForm}
                                    style={styles.btn} rounded light>
                                    <Text style={{ marginLeft: 90 , color : 'white'}}>CREATE</Text>
                                </Button>
                            </Form>
                         
                        </Tab>
                        <Tab heading="View Circle">
                            <ViewCircle />
                        </Tab>
                    </Tabs>



                </Content>
            </Container>
        )
    }
}



export default CreateCircle;

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    btn: {
        width: 300,
        marginTop: 30,
        marginLeft: 22,
        backgroundColor: '#F43092',
        
        //alignItems : 'center'
    },
    inpt: {
        width: 200,
        height: 60,
        backgroundColor: 'transparent',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',



    },
    background: {
        backgroundColor: '#acbad1',
        justifyContent: 'center'
    },
    hdr: {
        backgroundColor: '#1eb3cd',
    },
    active: {
        borderWidth: 2,
        borderColor: '#00ff00',
    },
    txt: {
        color: 'white',
        marginLeft: 80,
        marginTop: 20
    }, container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
