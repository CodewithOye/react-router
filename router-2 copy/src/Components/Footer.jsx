import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <h3>Copyright reserved 2024</h3>
        <ul>
            <Link to="/privacy">
                <li>Privacy policy</li>
            </Link>

            <Link to="/terms">
                <li>Terms and Condition</li>
            </Link>
        </ul>
    </div>
  )
}

export default Footer