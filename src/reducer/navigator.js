import { addNavigationHelpers } from 'react-navigation'
import MainNavigator from '../Navigation/Route'

const initialState = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('LoginScreen'))
const initialState1 = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('HomeScreen'))
console.log(initialState1)

const navReducer = (state = initialState1, action) => {
    const nextState = MainNavigator.router.getStateForAction(action, state)
    return nextState || state
}

export default navReducer

