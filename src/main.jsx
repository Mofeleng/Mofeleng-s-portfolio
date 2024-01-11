import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Layout'
import Projects from './Pages/Projects'
import Project from './Pages/Project'
import NotFound from './Pages/NotFound'

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

        <Route path='/project/:slug' element={
          <Layout>
            <Project />
          </Layout>
        } />

        <Route path='*' element={
          <Layout>
            <NotFound />
          </Layout>
        } />
      </Routes>
    </Router>
  </React.StrictMode>,
)
