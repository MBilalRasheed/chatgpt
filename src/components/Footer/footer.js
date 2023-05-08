import React from "react"
import "./footer.css"
import { Box, Container, Grid, Stack, } from "@mui/material"
import ChromeLogo from "../../images/ChromeLogo.png"
import footResourceImage from '../../images/footResourceImage.png'
const Footer = () => {
  return (
    <div style={{width:'auto',height:'auto'}}>
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
            <p style={{marginTop:'auto',marginBottom:'auto'}}>Install for Free</p>
          </div>
          <div>
          <p className="leftHeadings3">Already have the extension?</p>
          <p className="leftHeadings4">Subscribe to a Premium Plan.</p>
        </div>
        </div>
        
      </div>
        <div className="row-class">
          <div className="fetures-flex">
            <p> Features</p>
            <p> Use Case #1</p>
            <p> Use Case #2</p>
            <p> Use Case #3</p>
            <p> Use Case #4</p>
            <p> Use Case #4</p>
          </div>
        </div>
     
    </div>

   
    
    </div>
    
  )
}

export default Footer
