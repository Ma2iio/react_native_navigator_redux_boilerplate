import React from 'react'
import {
  Provider,
} from 'react-redux'
import {
  createStore,
} from 'redux'
import { Root } from "native-base"
import App from './src'
import reducer from './src/reducer'

const store = createStore(reducer)
const _App = () => {
  return (
    <Provider store={store}>
      <Root>
        <App />
      </Root>
    </Provider>
  )
}

export default _App
  

