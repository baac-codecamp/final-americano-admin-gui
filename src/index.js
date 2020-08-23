import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import './index.css'
import App from './App'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  // <React.StrictMode>
  // <App />,
  // </React.StrictMode>,
  document.getElementById('root')
)
