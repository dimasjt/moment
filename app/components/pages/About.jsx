import React from 'react'
import { Link } from 'react-router-dom'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello About</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}
