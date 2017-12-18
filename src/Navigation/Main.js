import React from 'react'
import {
  connect,
} from 'react-redux'
import {
  StackNavigator,
  DrawerNavigator,
  addNavigationHelpers,
} from 'react-navigation'

import MainNavigator from './Route'

class _AppNavigator extends React.Component {

  render () {
    return (
      <MainNavigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })
        }  
      />
    )
  } 
}

const mapStateToProps = ({
  nav
}) => {
  console.log(32)
  console.log(nav)
  return {
    nav,
  }
}

const AppNavigator = connect(mapStateToProps)(_AppNavigator)

export default AppNavigator
