import React from 'react'

function Form(props){
  return(
    <form onSubmit={props.getWeather} className="form">
      <input name="city" placeholder="City" type="text" className="form-input"/>
      <button className="form-button">GET WEATHER</button>
    </form>
  )
}

export default Form
