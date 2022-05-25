import React from 'react'
import { useLocation } from "react-router-dom"


function Generic() {
  let location = useLocation();
  return (
    <h1>{location.pathname} coming soon</h1>
  )
}

export default Generic