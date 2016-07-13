import React from 'react'
import Header from './Header'
import { Provider } from 'react-redux'
import Main from './Main'
import configureStore from '../store'

const App = () => (
  <Provider store={configureStore()}>
    <div className="app">
      <Header />
      <Main />
    </div>
  </Provider>
)

export default App
