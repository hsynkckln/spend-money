import React from 'react'
import { useMoney } from '../context/SpendMoney'

function Footer() {
    const { basket,total} = useMoney()
    return (
        <div>
            <div className="row mt-3">
                <div className="col-sm-12">
                    <h1 className='text-center'>Your Receipt</h1>
                </div>
            </div>
            <div className="row mt-3">
                {
                    basket.map((item, key) => (
                        <div key={key} className="col-sm-12">
                            <div className='text-center mt-3' style={{ display: "flex", justifyContent: "center", gap: "150px" }}>
                                <h5>{item.title}</h5>
                                <h5>x {item.counter}</h5>
                                <h5>${item.amount}</h5>
                            </div>

                        </div>
                    ))
                }


            </div>
            <div className="row">
                <hr></hr>
                <div className='text-center' style={{ display: "flex", justifyContent: "center", gap: "320px" }}>
                    <h4 >TOTAL</h4>
                    <h4>${total}</h4>
                </div>
            </div>

        </div>
    )
}

export default Footer