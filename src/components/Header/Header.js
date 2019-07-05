import React from "react"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-item">
          <a href="/">Martis</a>
        </div>
        <div className="flex-item">
          <a href="/about">About</a>
        </div>
        <div className="flex-item">
          <a href="/login">Login</a>
        </div>
        <div className="flex-item">
          <a href="/plantapp">My Plan-t</a>
        </div>
      </div>
    )
  }
}
export default Header
