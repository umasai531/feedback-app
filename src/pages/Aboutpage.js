import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'
function Aboutpage() {
  return (
    <Card>
        <div className='about'>
            <h1>About this Project</h1>
            <p>This is a react app to leave feedback for a product or service</p>
            <Link to='/'>Back to Home</Link>
            </div></Card>
  )
}

export default Aboutpage