import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem';




class StarWars extends React.Component { 
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      image: null,

    }
  }

  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data =>  {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image,
          loadedCharacter: true,
          })
      })
  }

  render() {
    return (
      <div>
        {
          this.state.loadedCharacter &&
        <div>
          <h1>{this.state.name}</h1>
          <p>{this.state.height} m</p>
          <p>{this.state.homeworld}</p>
          <img src={this.state.image} width="500" height="500"></img>
        </div>
      }
        <button type="button" 
        onClick={() => this.getNewCharacter()}
        className="btn">Random Star Wars Character</button>
      
      </div>
        
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
