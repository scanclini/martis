import React, { Component } from "react"
import PlantHeader from "./components/PlantHeader"
import PlantInput from "./components/PlantInput"
import PlantItem from "./components/PlantItem"
import "./plantapp.css"

class PlantApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      plants: [
        { id: 0, text: "tomato" },
        { id: 1, text: "cucumber" },
        { id: 2, text: "pumpkin" },
      ],
      nextId: 3,
    }
  }
  addPlant = plantText => {
    let plants = this.state.plants.slice()
    plants.push({ id: this.state.nextId, text: plantText })
    this.setState({
      plants: plants,
      nextId: ++this.state.nextId,
    })
  }
  removePlant = id => {
    console.log("remove 1", id)
    this.setState({
      plants: this.state.plants.filter((plant, index) => plant.id !== id),
    })
  }

  render() {
    return (
      <div className="plantapp">
        <div className="plantapp-wrapper">
          <PlantHeader />
          <PlantInput plantText="" addPlant={this.addPlant} />
          <ul>
            {this.state.plants.map(plant => {
              return (
                <PlantItem
                  plant={plant}
                  key={plant.id}
                  id={plant.id}
                  removePlant={this.removePlant}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default PlantApp
