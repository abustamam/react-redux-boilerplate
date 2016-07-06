import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'


const app = (<AppContainer>
  <App />
</AppContainer>)

const rootEl = document.getElementById('app')

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}

render(app, rootEl)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<AppContainer>
      <NextApp />
    </AppContainer>, rootEl)
  })
}
