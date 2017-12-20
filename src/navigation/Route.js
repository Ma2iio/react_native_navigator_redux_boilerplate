import React from 'react'
import {
  StackNavigator,
  DrawerNavigator,
  addNavigationHelpers,
} from 'react-navigation'

import ContainerNav from './Container'
import Login from '../screen/Login'
import Screen1 from '../screen/Screen1'
import Screen2 from '../screen/Screen2'
import Screen3 from '../screen/Screen3'
import Sidebar from '../Component/Sidebar'

const HomeNavigator = DrawerNavigator({
  screen1: {
    screen: (props) => <ContainerNav {...props}><Screen1 {...props} /></ContainerNav> , 
  },
  screen2: {
    screen: (props) => <ContainerNav {...props}><Screen2 {...props} /></ContainerNav> ,
  },
  screen3: {
    screen: (props) => <ContainerNav {...props}><Screen3 {...props} /></ContainerNav> ,
  },
}, {
    initialRouteName: 'screen1',
    contentComponent: props => <Sidebar {...props} />
})

const MainNavigator = StackNavigator(
    {
        LoginScreen: {
            screen: Login,
        },
        HomeScreen: {
            screen: HomeNavigator,
        },
    }, {
        headerMode: 'none',
        title: 'Main',
        initialRouteName: 'LoginScreen',
    }
)

export default MainNavigator
