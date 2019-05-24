import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [{name:"Federico", id: 1}, {name: "Marcos", id: 2}]}
  }
  render () {
    return (
      <ul>
        <li>{this.state.data[0].name}</li>
        <li>{this.state.data[1].name}</li>
      </ul>
    );
  }
}

export default App;
