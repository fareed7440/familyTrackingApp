import SignUpCon from './container/signupCon'
import React,{Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginCon from './container/loginCon'
import MapsCon from './container/logoutCon'
import Home from './components/home'
import CreateCircleCon from './container/createCircleCon'

class Routing extends Component{
    render(){
        return(
 <Router > 

<Scene key = "home">
      <Scene key="home" component={Home} hideNavBar = {true} />
      <Scene key="logoutCon" component={MapsCon} hideNavBar = {false} title ='family' />
      <Scene key="home" component={Home} hideNavBar = {true} />
       <Scene key="createCircleCon" component={CreateCircleCon} hideNavBar = {true} />
       <Scene key="signupCon" component={SignUpCon} hideNavBar = {true} />
          <Scene key="loginCon" component={LoginCon} hideNavBar = {true} />
           {/*<Scene key="logoutCon" component={MapsCon} hideNavBar = {true} />
        */}
            </Scene>


            </Router>

        )
    }
}



export default Routing;