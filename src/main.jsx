import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Layout'
import Projects from './Pages/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/projects' element={
          <Layout>
            <Projects />
          </Layout>
        } />
      </Routes>
    </Router>
  </React.StrictMode>,
)
