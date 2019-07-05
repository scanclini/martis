import React, { Component } from "react"
import "../css/plantinput.css"

class PlantInputs extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }
  addPlant = plant => {
    // ensure toPlant != empty
    if (plant.length > 0) {
      this.props.addPlant(plant)
      this.setState({ value: "" })
    }
  }

  render() {
    return (
      <div>
        <input
          className="plantinput"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={() => this.addPlant(this.state.value)}
        >
          Submit
        </button>
      </div>
    )
  }
}
export default PlantInputs
