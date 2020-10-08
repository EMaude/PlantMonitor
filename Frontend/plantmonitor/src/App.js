import React, { Component } from 'react';
import './App.css';
import TempHumid from './components/tempHumid';

class App extends Component {

  state = {
    tempHumidData: []
  }

  componentDidMount() {
    fetch('http://192.168.2.40:4040/AllTH')
      .then(res => res.json())
      .then((data) => {
        this.setState({ tempHumidData: data })
      })
      .catch(console.log)
  }

  render(){
    return(
      <TempHumid temphumid = {this.state.tempHumidData} />
    );
  }
}

export default App;
