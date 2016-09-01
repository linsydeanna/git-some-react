import React, {Component} from 'react'
import UserInfo from './UserInfo'

class Repos extends Component {
  render () {
    return (
      <div>
        <h2>Student Profile</h2>
        <p>{this.props.params.userName}</p>
      </div>
    )
  }
}

export default Repos
