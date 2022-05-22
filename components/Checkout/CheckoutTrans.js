import React from 'react'
import { useDispatch } from "react-redux"
import { selectTotal } from "../../Redux/BasketSlice"
import Currency from "react-currency-formatter"
import { useSelector } from "react-redux"
 
function CheckoutTrans() {
    const dispatch = useDispatch()
    const total = useSelector(selectTotal)

  return (
    <div className='basis-1/5 bg-elementC rounded-xl'>
        <p className='font-semibold text-2xl'>Total items()</p>
        <p className='font-semibold text-xl p-4' >your total price: 
        <a className='p-2'><Currency quantity={total} currency="usd" ></Currency></a>
        
        </p>
        <button className="  rounded-xl bg-red-500 m-4 p-2 text-xl 
        font-semibold hover:scale-105 transition-colors duration-700 
        hover:bg-red-400"> Proced to payment</button>

    </div>
  )
}

export default CheckoutTrans