import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Login from '../Views/Login'
import Home from '../Views/Home'
import Produtos from '../Views/Produtos'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
  return (
    <routeDrawer.Navigator initialRouteName="Login">
      <routeDrawer.Screen name="Login" component={Login}/>
      <routeDrawer.Screen name="Home" component={Home}/>
      <routeDrawer.Screen name="Produtos" component={Produtos}/>
    </routeDrawer.Navigator>
  )
}

export default Drawer
