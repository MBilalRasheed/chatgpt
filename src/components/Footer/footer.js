import React from "react"
import "./footer.css"
import { Box, Container, Grid, Stack, } from "@mui/material"
import ChromeLogo from "../../images/ChromeLogo.png"
import footResourceImage from '../../images/footResourceImage.png'
import mainlogo from '../../images/mainlogo.jpg'
const Footer = () => {
  return (
    <div style={{ width: 'auto', height: 'auto' }}>
      <div className="image-class">
        <img src={footResourceImage} />
      </div>
      <div className="footer-container" >
        <div className="colorparent" direction={'column'} width={'50%'}>
          <p className="leftHeadings">Install AIPRM</p>
          <p className="leftHeadings2">Why waste more time?</p>
          <p className="leftHeadings">Take back some of those hours
            and get started with AIPRM today.</p>
          <div className="subcribe-containter">
            <div className="chromeExtentionBox1" >
              <img src={ChromeLogo} alt="extention" />
              <p style={{ marginTop: 'auto', marginBottom: 'auto' }}>Install for Free</p>
            </div>
            <div>
              <p className="leftHeadings3">Already have the extension?</p>
              <p className="leftHeadings4">Subscribe to a Premium Plan.</p>
            </div>
          </div>

        </div>
        <div className="row-class">
          <div className="bizbio">
            <div style={{ marginTop: '30px' }}>
              <img src={mainlogo} />
            </div>
            <p >
              This will be the<br />
              Biz Bio Tagline right here.
            </p>
          </div>

          <div className="headerName">
            <div className="fetures-flex">
              <p> Features</p>
              <p> Use Case #1</p>
              <p> Use Case #2</p>
              <p> Use Case #3</p>
              <p> Use Case #4</p>
              <p> Use Case #4</p>
            </div>
            <div className="fetures-flex">
              <p> Pricings</p>
              <p> FAQs</p>
              <p> Referral Program</p>
              <p> Testimonials</p>
            </div>
            <div className="fetures-flex">
              <p> Prompts</p>
              <p> CATEGORY #1</p>
              <p> CATEGORY #2</p>
              <p> CATEGORY #3</p>
            </div>
            <div className="fetures-flex">
              <p> About</p>
              <p> Company</p>
              <p> About Us</p>
              <p> Contact Us</p>

            </div>
            <div className="fetures-flex">
              <p> Resources</p>
              <p> Blog</p>
              <p> Webinars</p>
            </div>
            <div className="fetures-flex">
              <p> Community</p>
              <p> Docs</p>
              <p> Zendesk</p>
              <p> Status</p>
              <p> fin</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Footer
