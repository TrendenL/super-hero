import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App'
import ContextProvider from './context/ContextProvider'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
)