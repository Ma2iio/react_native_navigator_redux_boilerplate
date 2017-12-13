import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Login from '../screen/Login'
import Screen1 from '../screen/Screen1'
import Screen2 from '../screen/Screen2'
import Screen3 from '../screen/Screen3'

const HomeNavigator = DrawerNavigator({
  screen1: {
    screen: Screen1, 
  },
  screen2: {
    screen: Screen2, 
  },
  screen3: {
    screen: Screen3, 
  },
})

const HomeStack = StackNavigator({
  HomeStack: {
    screen: HomeNavigator
  }
})

const MainNavigator = StackNavigator({
  LoginScreen: {
    screen: Login,
  },
  HomeScreen: {
    screen: HomeStack,
  },
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'HomeScreen',
})

export default MainNavigator
