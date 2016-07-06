import React from 'react'
import Header from './Header'
import { Provider } from 'react-redux'
import Main from './Main'
import configureStore from '../store'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Header />
      <Main />
    </div>
  </Provider>
)

export default App
