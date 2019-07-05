import React, { Component } from "react"
import dogs from "../../assets/gifs/tati-mirto.gif"
import "./footer.css"

class index extends Component {
  render() {
    return (
      <div className="footer">
        <img className="footer-gif" src={dogs} alt={"dogs running"} />
      </div>
    )
  }
}
export default index
