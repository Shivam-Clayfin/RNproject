import React from 'react'
import "./details.css";

export default function Single(props) {
  return (
    <div>
        <div className="Singlecard" key={props.value.id}>
            <img className='imgs' src={props.value.image} />
            <h4>{props.value.title}</h4>
            <h5> Price :{props.value.price}</h5>
          </div>
    </div>
  )
}
