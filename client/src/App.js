import './App.css';
import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      allNames:[]
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
    console.log(this.state);
  }

  // handleClick(e) {
  //   e.preventDefault()
  //   api
  //     .login(this.state.username, this.state.password)
  //     .then(result => {
  //       console.log('SUCCESS!')
  //       this.props.history.push('/') // Redirect to the home page
  //     })
  //     .catch(err => this.setState({ message: err.toString() }))
  // }

  render() {
    return (
      <div className="name-input">
        <h2>Please Enter Your Name</h2>
        <form>
          First Name:{' '}
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Last Name:{' '}
          <input
            type="test"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* <button onClick={e => this.handleClick(e)}>Login</button> */}
        </form>
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    )
  }

}

export default App;
