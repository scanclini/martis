import React, { Component } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import LoginForm from "../components/LoginForm/LoginForm"

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <LoginForm />
        <Footer />
      </div>
    )
  }
}
export default Login
