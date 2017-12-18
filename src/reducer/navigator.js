import { addNavigationHelpers } from 'react-navigation'
import MainNavigator from '../navigation/Route'

const initialState = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('LoginScreen'))
const initialState1 = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('LoginScreen1'))
const navReducer = (state = initialState1, action) => {
    console.log(state)
    const nextState = MainNavigator.router.getStateForAction(action, state)
    return nextState || state
}

export default navReducer

