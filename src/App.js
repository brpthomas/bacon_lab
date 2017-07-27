import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import BaconList from './components/BaconList'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title banana="Things that are better with Bacon:" />
      <BaconList />


        
      </div>
    );
  }
}

export default App;
