import React, {Component} from 'react'

  class ControlledInput extends Component {
    constructor() {
      super()
      this.state={
        firstName: '',
        lastName: ''
      }
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    render() {
      return(
        <div>
          <input type="text" id="firstName" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
          <input type="text" id="lastName" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        </div>
      )
    }
  }

export default ControlledInput