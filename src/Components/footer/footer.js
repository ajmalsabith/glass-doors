import React from 'react'
import './footer.css'
import { useLocation } from 'react-router-dom';


 function Footer() {

    const location = useLocation();

    console.log('Current pathname:', location.pathname)
  return (
    <div className='mt-4'>
    <footer>
    <div class="footer-container">
     
      <div class="footer-section">
        <p>&copy; 2035 by M&B Remodeling. Powered and secured by Storysphere</p>
      </div>
    </div>
  </footer>

    </div>
  )
}
 

export default Footer