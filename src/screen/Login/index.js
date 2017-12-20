import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Content,
  Container,
  Icon,
  Text,
} from 'native-base'
import {
  Button,
  FormLabel,
  FormInput,
} from 'react-native-elements'

/**
 * HSColor provider
 */
import Color from 'HSColor'

import styles from './styles'

class Login extends React.Component {
  render () {
    return (
      <Container
        backgroundColor={Color.ts2}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon
            name="boat"
            ios="ios-boat"
            md="md-boat"
            style={{
              fontSize: 80,
              color: '#fff'
              }}
            />
          <Text style={{ fontSize: 32, color: '#fff' }} >GPS Tracker</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Content>
            <FormLabel>
              Username
            </FormLabel>
            <FormInput />                
            <FormLabel containerStyle={styles.title}>Password</FormLabel>
            <FormInput />                
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
          </Content>
        </View>
      </Container>
    )
  }
}


export default Login
