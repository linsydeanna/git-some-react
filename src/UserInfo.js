import React, {Component} from 'react'
import $ from 'jquery'

class UserInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: "",
        avatar: "",
        repo_count: ""
      }
}
componentDidMount() {
  console.log(this.state);
  this.serverRequest = $.get(`https://api.github.com/users/${this.props.params.userName}`, function (result) {
    console.log(result);
    this.setState({
      username: result.login,
      avatar: result.avatar_url,
      repo_count: result.public_repos
    });
    console.log(this.state);
  }.bind(this));

}
componentWillUnmount() {
  this.serverRequest.abort();
}

  render () {
    return (
      <div>
      <p>GitHub Account: {this.state.username}</p>
      <p><img src={this.state.avatar} alt=""/></p>
      <p># of Repos: {this.state.repo_count}</p>
        </div>
      );
    }
  }

export default UserInfo
