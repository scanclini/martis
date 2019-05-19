import React from "react"
import "./header.css"
//import { Navbar, Container, Nav } from "react-bootstrap"

class Header extends React.Component {
  render() {
    return (
      <div className="flex-container">
        {/* <Navbar.Brand href="/">Martis</Navbar.Brand> */}

        <div className="flex-item">
          <a href="/">Martis</a>
        </div>
        <div className="flex-item">
          <a href="/about">About</a>
        </div>
        <div className="flex-item">
          <a href="/login">Login</a>
        </div>
      </div>
    )
  }
}
export default Header
