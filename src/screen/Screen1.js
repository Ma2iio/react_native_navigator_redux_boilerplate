import React from 'react'
import { Button } from 'react-native'
import {
  Header,
  Body,
  Left,
  Container,
  Content,
  Right,
  Text,
  Title,
} from 'native-base'

class Login extends React.Component {
  render () {
    return (
      <Content padder>
        <Text>
          Hello World, This's Screen 1
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Pretend we logged in"
        />
      </Content>
    )
  }
}

export default Login
