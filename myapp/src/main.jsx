import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store/store.js'
import UserRequestSaga from './UserRequestSaga.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <UserRequestSaga/>
    
    </Provider>
  </React.StrictMode>,
)
