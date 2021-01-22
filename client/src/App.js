import './App.css';
import React, { Component } from 'react';
import axios from 'axios'

const baseURL = process.env.REACT_APP_SERVER_POINT;
console.log(baseURL)

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

  // service = axios.create({
  //   baseURL,
  //   withCredentials: true,
  // });
  
  handleSubmit(event) {
    event.preventDefault();

    axios
      .post(baseURL + "/name",
      {
        first: this.state.firstName,
        last: this.state.lastName
      }
      )
      .then((nameData) => {
        console.log(nameData);
      })
      .catch((error) => console.log(error));
  }


  render() {
    return (
      <div className="name-input">
        <h2>Please Enter Your Name</h2>
        <form onSubmit={this.handleSubmit}>
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
          <button>Add Name</button>
        </form>
      </div>
    )
  }

}

export default App;
