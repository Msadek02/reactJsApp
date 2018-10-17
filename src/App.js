import React, { Component } from 'react';
import Racers from "./Racers"
import AddRacer from "./AddRacer"

class App extends Component {
  state = {
    racers : [
      {name:"Mostafa", age:28, belt:"black", id:1},
      {name:"Ahmed", age:25, belt:"green", id:2},
      {name:"Souhib", age:29, belt:"yellow", id:3}
    ]
  }

  addRacer = (racer) => {
    racer.id = Math.random();
    let racers = [...this.state.racers, racer];
    this.setState({
      racers: racers
    })
  }

  deleteRacer = (id) => {
    let racers = this.state.racers.filter(racers => {
      return racers.id !== id
    });
    this.setState({
      racers: racers
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p> Welcome :) </p>
        <Racers deleteRacer={this.deleteRacer} racers= {this.state.racers}/>
        <AddRacer addRacer={this.addRacer} />
      </div>
    );
  }
}

export default App;
