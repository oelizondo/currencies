import React, { Component } from 'react'

class Currency extends Component {
  render() {
    let currency = this.props.name
    let value = this.props.value

    return(
     <div>
       <p>{currency} : {value}</p>
     </div>
    )
  }
}

export default Currency
