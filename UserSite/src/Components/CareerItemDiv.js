import React from 'react'
import { Link } from 'react-router-dom'

export default function CareerItemDiv(props) {
  return (
   <>
    <div className="col-md-3 m-5 shadow p-4 careerborder">
        <small><b>{props.value.country} | {props.value.city}</b></small> <br />
        <Link style={{color:"black", fontSize:"30px", fontWeight:"600"}}>{props.value.jobtitle}</Link>
        <p><b>{props.value.jobtype}</b></p>
        <small><b>{props.value.date}</b></small>
    </div>
   </>
  )
}
