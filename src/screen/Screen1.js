import React from 'react'
import { Button } from 'react-native'
import api from 'HSApichai'
console.log(api.primary1)
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
