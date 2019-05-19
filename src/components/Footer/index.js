import React, { Component } from "react"
import dogs from "../../assets/gifs/tati-mirto.gif"

class index extends Component {
  render() {
    return (
      <div margin="auto" align="center">
        <div>Fooooter</div>
        <img
          alt="footer gif"
          width="20%"
          padding="100"
          align="left"
          src={dogs}
        />
      </div>
    )
  }
}
export default index
