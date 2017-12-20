import React from 'react'
import {
  ActivityIndicator,
} from 'react-native'
import {
  Provider,
} from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Root } from "native-base"

import App from './src'
import configureStore from './src/reducer/configureStore'

const { persistor, store } = configureStore()

const onBeforeLift = () => {
  console.log('before lift')
}

const _App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}
      >
        <Root>
          <App />
        </Root>
      </PersistGate>
    </Provider>
  )
}

export default _App
  

