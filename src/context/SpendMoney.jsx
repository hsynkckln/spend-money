import { createContext,useContext, useEffect, useState } from "react";
import axios from "axios";

const SpendMoney=createContext();

export const SpentProvider=({children})=>{

    const [money,setMoney]=useState(100000000000)
    const [basket,setBasket]=useState([])
    const [total,setTotal]=useState(0)
    

    // useEffect(()=>{
    //     axios("https://fakestoreapi.com/products")
    //     .then(res=>res.data)
    //     .then(data=>setSpend(data))
    // },[])
   

    const values={
        money,setMoney,basket,setBasket,total,setTotal
    }

    return <SpendMoney.Provider value={values}>{children}</SpendMoney.Provider>
}

export const useMoney=()=>useContext(SpendMoney);