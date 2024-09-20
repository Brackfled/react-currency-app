import React, { useState } from 'react'
import '../css/Currency.css'
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios'

    let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
    let TOKE = "fca_live_amgJnsUn5KG4D1pmDUofpc93RxIbpiSHWYog2Y0y"

function Currency() {
    const [amount, setAmount ] = useState(0)
    const [fromCurrency, setFromCurrency ] = useState('USD')
    const [toCurrency, setToCurrency ] = useState('TRY')
    const [result, setResult ] = useState(0)


    const exchange = async() => {
       const response = await axios.get(`${BASE_URL}?apikey=${TOKE}&base_currency=${fromCurrency}`)       
       setResult((response.data.data[toCurrency] * amount).toFixed(2))
       
    }    

  return (
    <div className='currency-div'>
        <div style={{marginTop: "-20px", fontFamily: "arial", backgroundColor: "black", color: "#fff", width:"100%", textAlign:"center"}}>
            <h3 >CURRENCY APPLICATION</h3>
        </div>

        <div style={{marginTop:"25px"}}>
        <input type="number" className='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <select className='from-currency-option'
            onChange={(e) => setFromCurrency(e.target.value)}
        >
            <option >USD</option>
            <option >EUR</option>
            <option >TRY</option>
        </select>

        <FaArrowCircleRight style={{fontSize: "25px", marginRight:"10px", marginTop:"10px"}}/>

        <select className='to-currency-option'  onChange={(e) => setToCurrency(e.target.value)}>
            <option >EUR</option>
            <option >TRY</option>
            <option >USD</option>
            
        </select>
        <input type='number' className='result' value={result} onChange={(e) => setResult(e.target.value)}/>

        </div>
        <div>
            <button className='exchange-button' onClick={exchange}>Çevir</button>
        </div>
    </div>
  )
}

export default Currency