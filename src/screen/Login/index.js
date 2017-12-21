import React from 'react'
import {
  KeyboardAvoidingView,
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
        <Content
          scrollEnabled
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
          <KeyboardAvoidingView
            behavior="padding"
            resetScrollToCoords={{ x: 0, y: 0 }}
            keyboardVerticalOffset={50}
          >
            <FormLabel>
              Username
            </FormLabel>
            <FormInput />                
            <FormLabel>Password</FormLabel>
            <FormInput />                
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <Button
              backgroundColor={Color.primary}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              title="Login"
            />
            <FormInput />
          </KeyboardAvoidingView>
        </Content>
      </Container>
    )
  }
}


export default Login
