import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';

const baseURL = process.env.REACT_APP_SERVER_POINT;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      allNames: null,
      loading: true,
      isVerified: false
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.callback = this.callback.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)
  }

  verify() {
    if (this.state.isVerified === false) {
      alert("Please verify your identity with the Recaptcha before continuing. If it is not visible, please refresh the page and try again.");
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    } 
  }

  callback() {
    console.log("Recaptcha loaded");
  }

  getAllNames(){
    axios.get(baseURL + "/allNames")
    .then((allNames) => {
      this.setState({
        allNames: allNames,
        loading: false
      })
    })
    .catch((err) => {
      throw err;
    })
  }

  showAllNames() {
    if (this.state.loading === false) {
      return this.state.allNames.data.names.map((name) => (
        <div className="name-card">
            <li>{name.first} {name.last}</li>
        </div>
      ));
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  
  handleSubmit(event) {

    if (this.state.isVerified === false) {
      this.verify();
    } else {
      axios
      .post(baseURL + "/name",
      {
        first: this.state.firstName,
        last: this.state.lastName
      }
      )
      .then((nameData) => {
        this.setState({
          firstName: '',
          lastName: ''
        })
        window.location.reload();
      })
      .catch((err) => {
        throw err;
      });
    }

    event.preventDefault();

    }

  render() {

    if (this.state.allNames == null) {
    axios.get(baseURL + "/allNames")
    .then((allNames) => {
      this.setState({
        allNames: allNames,
        loading: false
      })
    })
    .catch((err) => {
      throw err;
    })
  } 

    return (
      <div className="student-app">
        <div className="enrollment-form">
          <h2>Enter Your Name</h2>
          <form onSubmit={(e) => this.handleSubmit(e)} >
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

            <Recaptcha
              sitekey= '6LfhtTcaAAAAAJDYbf8wihNzEnerwsc_ve_0rKom'
              render="explicit"
              verifyCallback={this.verifyCallback}
              onloadCallback={this.callback()}
            />

            <button>Enroll Student</button>
          </form>
        </div>

        <div className = "student-list">
          <h3>Student Table</h3>
          <ul className="all-names">{this.showAllNames()}</ul>
        </div>

      </div>
    )
  }

}

export default App;
