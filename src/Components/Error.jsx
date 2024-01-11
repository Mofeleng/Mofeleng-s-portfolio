import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Error.css'

function Error({ type, message }) {
  return (
    <div className="error-container">
        <h2>{ type }</h2>
        <p>{ message }. <Link to={'/'} className='text_white under'>Go home</Link></p>
  </div>
  )
}

export default Error