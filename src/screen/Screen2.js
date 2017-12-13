import React from 'react'
import { Button } from 'react-native'
import { Container, Text } from 'native-base'

class Login extends React.Component {
  render () {
    return (
      <Container>
        <Text>
          Hello World, This's Screen 2
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('drawerStack')}
          title="Pretend we logged in"
        />
      </Container>
    )
  }
}

export default Login
