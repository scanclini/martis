import React, { Component } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import PlantApp from "../components/PlantApp/PlantApp"

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <PlantApp />
        <Footer />
      </div>
    )
  }
}
export default Login
