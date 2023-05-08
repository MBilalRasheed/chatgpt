import * as React from "react"

import "./layout.css"

// Header and Footer
import Header from "./Header/header"
import Footer from "./Footer/footer"
import { styled } from '@mui/material/styles';
import { Stack } from "@mui/material";
import { red, green, blue } from '@mui/material/colors';

const Root = styled(Stack)(({ theme }) => {
  
  // return {
  //     position: 'relative', bottom: '500px' 
  // }
  return {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      bottom: '400px',
      zIndex:-1
    },
    [theme.breakpoints.up('md')]: {
      position: 'relative', 
      bottom: '400px', 
      zIndex:-1
    },
    [theme.breakpoints.up('lg')]: {
      // backgroundColor: green[500],
      height:"200px",
      position: 'absolute', 
      bottom: '1000px', 
      zIndex:2,
      
    },
  }
});

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main style={{
          background: "#f8f8f8",
          // clipPath: 'polygon(0 0, 100% 0%, 100% 99%, 0 100%)',
          margin: '0px',
        }}>
          {children}</main>
        <div className="relative">
          <div className="absolute">
            <Footer />
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Layout
