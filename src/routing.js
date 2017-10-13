import SignUpCon from './container/signupCon'
import React,{Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginCon from './container/loginCon'
import MapsCon from './container/logoutCon'
import Home from './components/home'
import CreateCircleCon from './container/createCircleCon'
import {StyleSheet} from 'react-native'
import ViewCircle from './components/viewCircle'
import SendCode from './components/codeView.'
class Routing extends Component{
    render(){
        return(
 <Router navigationBarStyle={styles.navTitle}> 

<Scene key = "logoutCon">
      <Scene key="logoutCon"  titleStyle={{alignSelf: 'center',}} component={MapsCon} hideNavBar = {false} title ='family' />
      <Scene key="home" component={Home} hideNavBar = {true} />
    
      <Scene key="home" component={Home} hideNavBar = {true} />
       <Scene key="createCircleCon" titleStyle={{alignSelf: 'center',}} component={CreateCircleCon} hideNavBar = {false}  title ='Create Circle' />
       <Scene key="signupCon" component={SignUpCon} hideNavBar = {true} />
       <Scene key="codeView" component={SendCode} hideNavBar = {true} />
          <Scene key="loginCon" component={LoginCon} hideNavBar = {true} />
          <Scene key="viewCircle" component={ViewCircle} hideNavBar = {true} />
           {/*<Scene key="logoutCon" component={MapsCon} hideNavBar = {true} />
        */}
            </Scene>

                         
            </Router>

        )
    }
}



export default Routing;
const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red', // changing navbar color
  },
  navTitle: {
    //color: 'red', // changing navbar title color
    justifyContent:'center'
   
  },
  routerScene: {
    //paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
  },
})