import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import {
  RouterProvider,
} from "react-router-dom";
import myCreateRoute from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={myCreateRoute} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
