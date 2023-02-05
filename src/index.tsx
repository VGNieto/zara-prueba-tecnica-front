import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
 
const container = document.getElementById('root') as HTMLElement
console.log(container)
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
 
