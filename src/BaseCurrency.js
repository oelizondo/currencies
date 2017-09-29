import React, { Component } from 'react'
import { getCurrencyRate } from './api/fixer'
import Currency from './Currency'
import './BaseCurrency.css'

class BaseCurrency extends Component {
  constructor() {
    super()
    this.state = {
      baseCurrency: '',
      rates: {},
      currencies: []
    }
  }

  async callAPI(value) {
    let conversion = await getCurrencyRate(value)
    this.setState({
      baseCurrency: value,
      currencies: Object.keys(conversion),
      rates: conversion
    })
    this.createCurrencyComponent()
  }

  createCurrencyComponent() {
    let keys = this.state.currencies
    let currencies = keys.map(key => <Currency key={key} name={key} value={this.state.rates[key]} />)
    return currencies
  }

  handleChange(e) {
    this.callAPI(e.target.value)
  }

  componentDidMount() {
    this.callAPI('USD')
  }

  render() {
   let currencies = this.createCurrencyComponent()
   return (
      <div className='app'>
        <div className='base-currency-container'>
          <p>Base: {this.state.baseCurrency}</p>
            <select onChange={this.handleChange.bind(this)}>
            <option selected disabled>Choose</option>
            {this.state.currencies.map(currency => <option value={currency} key={currency}>{currency}</option>)}
          </select>
        </div>
        <div className='currency-container'>
        {currencies}
        </div>
      </div>
    )
  }
}

export default BaseCurrency
