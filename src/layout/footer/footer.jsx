import React from 'react'
import footerlogo from "../../assets/logo_footer.png"
import "../footer/footer.scss"

function footer() {
  return (
    <div className="footer"> 
   <div className="footer__logo">
    <img src={footerlogo} alt="logo" />
   </div>
   <div className="footer__txt" > © 2020 Kasa .All rights reserved</div>
    </div>
  )
}

export default footer
