import React from 'react';
import './App.css';
import Header from './Header'
import Form from './Form'
import Info from './Info'

class App extends React.Component {
  constructor(){
    super()
    this.state=({
      city: undefined,
      temp: undefined,
      pressure: undefined,
      humidity: undefined,
      wind: undefined,
      visibility: undefined,
      error: undefined,
    })
  }

  getWeather = async (event) =>{
    event.preventDefault();
    const city = event.target.elements.city.value;
    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45c51551349111f58a3d0cee37c764b9&units=metric`)
      const data = await api_url.json()
      console.log(data);
      if(data.cod!=404){
        this.setState({
          city: data.name,
          temp: data.main.temp,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          visibility: data.visibility,
          error: undefined,
        })
      }
      else{
        this.setState({
          city: undefined,
          temp: undefined,
          pressure: undefined,
          humidity: undefined,
          wind: undefined,
          visibility: undefined,
          error: 'Please choose your city',
        })
      }
    }
    else{
      this.setState({
        city: undefined,
        temp: undefined,
        pressure: undefined,
        humidity: undefined,
        wind: undefined,
        visibility: undefined,
        error: 'Please choose your city',
      })
    }
  }
  render(){
    return (
      <div className="main">
        <div className="main-wrapper">
          <div className="wrapper-left">
            <div>
              <Header />
              <Form getWeather={this.getWeather}/>
            </div>
          </div>
          <div className="wrapper-right">
            <Info
              city={this.state.city}
              temp={this.state.temp}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              wind={this.state.wind}
              visibility={this.state.visibility}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
