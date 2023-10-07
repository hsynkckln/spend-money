import React, { useEffect, useState } from 'react'
import { useMoney } from '../context/SpendMoney';
import products from "./product"

function Card() {
    
    const { setMoney, basket, setBasket,total,setTotal } = useMoney()

    const changeBuy = (e) => {
        e.count++
        setMoney((p) => p - e.price)
        
        let totals=e.price*e.count
        setBasket([...basket,{title:e.title,price:e.price,id:e.id,amount:totals,counter:e.count}])

        basket.map((item)=>{
            if(item.title==e.title){
                setBasket([...basket])
                item.counter++
                item.amount=e.price*e.count
                setTotal((p)=>p+item.amount)
                
            }
        })
        console.log(basket);
    }
    const changeSell = (e) => {
        e.count--
        setMoney((p) => p + e.price)
            
        basket.map((item)=>{
            if(item.title==e.title){
                item.counter--
                item.amount=e.price*e.count
                
                if(e.count==0 && item.id==e.id){
                    let baskets=basket.filter(x=>x.id!=e.id)
                    setBasket([...baskets])
                    setTotal((p)=>p-item.amount)
                    console.log(baskets);
                }
            } 
        })
    }

    return (
        <div className='row mt-2'>
            {
                products.map((item, key) => (
                    <div key={key} className="col-sm-4 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <img className='imgg' width="30%" height="100px" src={item.img}></img>
                                    <h5 className='text-center mt-4'>{item.title}</h5>
                                    <h4 className='text-center mt-4' style={{ color: "green" }}>${item.price}</h4>
                                </div>

                            </div>
                            <div className="card-footer" style={{ backgroundColor: "white", border: "none" }}>
                                <div className='just'>
                                    <button className='btn' style={{ backgroundColor: "#dfe4ea", border: "none" }} disabled={item.count <= 0} onClick={() => changeSell(item)}>Sell</button>
                                    <input type='number' value={item.count} disabled></input>
                                    <button className='btn btn-success' onClick={() => changeBuy(item)}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default React.memo(Card)