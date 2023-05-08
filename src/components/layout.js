import * as React from "react"

import "./layout.css"

// Header and Footer
import Header from "./Header/header"
import Footer from "./Footer/footer"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main style={{
          background: "#f8f8f8", clipPath: 'polygon(0 0, 100% 0%, 100% 99%, 0 100%)',margin:'0px',position:'relative'}}>{children}</main>
        <div style={{position:'relative',bottom:'73px'}}>
        <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
