import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import todoApp from './reducers'

const store = createStore(todoApp)

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'))
