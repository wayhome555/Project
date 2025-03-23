import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'lib-flexible/flexible'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

// 单页应用 更好的用户体验 减少网络请求
createRoot(document.getElementById('root')).render(
    <Router> 
      <App />
    </Router>,
)
