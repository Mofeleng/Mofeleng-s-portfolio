import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Error.css'

function ErrorDefault({ type, message }) {
  return (
    <div className="error-container">
        <h2>{ type }</h2>
        <p>{ message }. <Link to={'/'} className='under'>Go home</Link></p>
  </div>
  )
}

export default ErrorDefault