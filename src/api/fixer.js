import axios from 'axios'
const URL = 'http://api.fixer.io/latest?base='

export async function getCurrencyRate(currency) {
  let res = await axios.get(URL + currency)
  return res.data.rates
}
