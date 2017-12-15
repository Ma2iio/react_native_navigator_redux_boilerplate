import React from 'react'
import { Button } from 'react-native'
import { Container, Text } from 'native-base'

class Login extends React.Component {
  render () {
    return (
      <Container>
        <Text>
          Hello World
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          title="Pretend we logged in"
        />
      </Container>
    )
  }
}

export default Login
