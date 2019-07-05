import React, { Component } from "react"
import "../css/plantitem.css"

class PlantInputs extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  removePlant = id => {
    console.log("romive 2", id)
    this.props.removePlant(id)
  }
  render() {
    return (
      <div className="plant-wrapper">
        <button
          className="remove-plant"
          onClick={e => this.removePlant(this.props.id)}
        >
          Remove
        </button>
        {this.props.plant.text}
      </div>
    )
  }
}
export default PlantInputs
