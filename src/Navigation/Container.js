import React from 'react'
import {
  Header,
  Button,
  Body,
  Left,
  Icon,
  Container,
  Content,
  Right,
  Text,
  Title,
} from 'native-base'

class ContainerNav extends React.Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        { this.props.children }
      </Container>
    )
  }
}

export default ContainerNav
