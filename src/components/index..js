 import React, {Component} from 'react'
import {createAppContainer, createStackNavigatior} from 'react-navigation';

import Login from './Login'
import Home from './Home'

const MainNav = createStackNavigatior(
{
     Login:{
        screen: Login, navigationOptions:{
        
           header:null
        }
    },
    

    Home:{
        screen: Home, navigationOptions:{
        
            herderTitle:'Home'
        }
    },

}

)
export default createAppContainer(MainNav); 