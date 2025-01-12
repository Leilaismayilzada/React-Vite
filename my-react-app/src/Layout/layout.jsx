import React from 'react'
import Footer from "../../src/Layout/Footer/footer.jsx"
import Header from "../../src/Layout/Header/header.jsx"
const Layout = ({cHildren}) => {
  return (
    <div>
        <Header/>
        {cHildren}
      <Footer/>
    </div>
  )
}

export default Layout
