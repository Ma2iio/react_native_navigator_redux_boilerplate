import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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

const getCurrentRoute = (state) => {
  const findCurrentRoute = (navState) => {
    if (navState.index !== undefined) {
      return findCurrentRoute(navState.routes[navState.index])
    }
    return navState.routeName
  }
  return findCurrentRoute(state.nav)
}

class ContainerNav extends React.Component {

  render () {
    const {
      nameRoute,
    } = this.props
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
            <Title>{nameRoute}</Title>
          </Body>
          <Right />
        </Header>
        { this.props.children }
      </Container>
    )
  }
}

ContainerNav.propTypes = {
  nameRoute: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    nameRoute: getCurrentRoute(state)
  }
}

export default connect(mapStateToProps, null)(ContainerNav)
