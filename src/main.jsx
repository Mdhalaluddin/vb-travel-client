import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import {
  RouterProvider,
} from "react-router-dom";
import myCreateRoute from './Router/Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={myCreateRoute} />
    </ThemeProvider>
  </React.StrictMode>,
)
