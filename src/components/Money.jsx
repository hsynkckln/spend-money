import React from 'react'
import { useMoney } from '../context/SpendMoney'

function Money() {
    const {money}=useMoney()
  return (
    <div className='row mt-2 sticky-top'>
         <div className="col-sm-12 menu2">
            <h1 className='text-center' style={{color:"white"}}>{`$${new Intl.NumberFormat('en-US').format(money)}`}</h1>
        </div>
    </div>
  )
}

export default Money