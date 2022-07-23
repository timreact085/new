
import { RootRef } from '@material-ui/core'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'


const root = createRoot( document.getElementById('app')!)
root.render(<App />)

root.render(

    <React.StrictMode>
     
        <App />
 
        
        
    </React.StrictMode>
    
)

