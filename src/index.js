import React from 'react'
import { Platform } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base'

import AppNavigator from './Navigation/Main'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
        {
          this.state.fontLoaded ? 
            <AppNavigator />
           : null
        }
      </Container>
    );
  }
}
