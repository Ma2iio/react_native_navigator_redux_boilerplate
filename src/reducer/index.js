import {
    combineReducers,
} from 'redux'

import navReducer from './navigator'

const reducer = combineReducers({
    nav: navReducer,    
})

export default reducer