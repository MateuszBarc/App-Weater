import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

//Klucz do API
const APIKey = 'b981bd0af98e6c79d42ef53723a2c6ba'

class App extends Component {

  state = {
    value: '',
    data: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  // handleCitySubmit = (e) => {
  //   e.preventDefault()
  //   const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}
  //   &APPID=${APIKey}&units=metric`;

  //   fetch(API)
  //     .then(respone => {
  //       if (respone.ok) {
  //         return respone
  //       }
  //       throw Error("Nie udalo sie")
  //     })
  //     .then(respone => respone.json())
  //     .then(data => {
  //       const time = new Date().toLocaleString()
  //       this.setState(prevState => ({
  //         error: false,
  //         data: time,
  //         city: prevState.value,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //       }))
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       this.setState({
  //         err: true,
  //         city: this.state.value,
  //       })
  //     })

  // }



  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Nie udało się");
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString();
          this.setState({
            err: false,
            data: time,
            city: this.state.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            err: true,
            city: this.state.value,
          });
        });
    }
  }


  render() {
    return (
      <div className="App" >
        <Form
          value={this.state.value}
          change={this.handleInputChange}
        />
        <Result
          weather={this.state}
        />
      </div>
    );
  }
}

export default App;
