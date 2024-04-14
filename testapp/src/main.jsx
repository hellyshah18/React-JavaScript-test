import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TestForm } from './Form.jsx'
import { FakeStoreAPIProducts } from './FakeStoreAPIProducts.jsx'
import { TestRouter } from './TestRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestRouter />
  </React.StrictMode>,
)
