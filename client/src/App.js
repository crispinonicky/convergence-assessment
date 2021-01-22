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
      allNames: null,
      loading: true
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  getAllNames(){
    axios.get(baseURL + "/allNames")
    .then((allNames) => {
      console.log(allNames)
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
      //console.log(this.state.allNames);
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
    console.log(this.state);
  }
  
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
        console.log('asdasdasd', nameData);
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

  render() {

    //this.getAllNames()
    if (this.state.allNames == null) {
    axios.get(baseURL + "/allNames")
    .then((allNames) => {
      console.log(allNames)
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
      <div className="name-input">
        <h2>Please Enter Your Name</h2>
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
          <button>Add Name</button>
        </form>

        <ul className="all-names">{this.showAllNames()}</ul>

      </div>
    )
  }

}

export default App;
