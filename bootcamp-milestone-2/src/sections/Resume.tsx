import React from 'react'
import {Timeline} from "../components/Timeline"
import { experiences } from "../constants";

const Resume = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences}/>
    </div>
  )
}

export default Resume
