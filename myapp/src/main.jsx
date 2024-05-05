import React from 'react'
import ReactDOM from 'react-dom/client'
import ParentAPI from './ParentAPI.jsx'
//  import './index.css'


import { BrowserRouter } from 'react-router-dom'
import ApplicationRoute from './Route.jsx'
import CounterRedux from './CounterRedux.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <CounterRedux />
    </Provider>
  </React.StrictMode>,
)
