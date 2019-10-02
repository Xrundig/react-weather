import React from 'react'

function Info (props){
  return(
      <div>
      { props.city &&
      <div>
        <div>City: {props.city}</div>
        <div>Temperature: {props.temp + '°'}</div>
        <div>Pressure: {props.pressure + " Pa"}</div>
        <div>Humidity: {props.humidity + " g/m3"}</div>
        <div>Wind: {props.wind + " m/s"}</div>
        <div>Visibility: {props.visibility/1000 + " km"}</div>
      </div> }
      { props.error &&
        <div>Error: {props.error}</div>
      }
      </div>
  )
}

export default Info
