import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Produtos from '../Views/Produtos'
import Login from '../Views/Login'
import Home from '../Views/Home'

const routeTab = createBottomTabNavigator()

const Tab = () => {
  return (
    <routeTab.Navigator initialRouteName='Login' tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'green',
      labelStyle: {fontSize: 30},
      
    }}>
      <routeTab.Screen name="Login" component={Login}/>
      <routeTab.Screen name="Home" component={Home}/>
      <routeTab.Screen name="Produtos" component={Produtos}/>
    </routeTab.Navigator>
    
  )
}

export default Tab

