import React from 'react'
import Error from '../Components/Error'

function NotFound() {
  return (
    <>
        <Error type={`404`} message={`Sorry this page doesn't exist.`} />
    </>
  )
}

export default NotFound