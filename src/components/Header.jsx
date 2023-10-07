import React from 'react'

function Header() {

  return (
    <div className="row" style={{ backgroundColor: "#fff" }}>
      <div className="col-sm-12 menu1">
        <img className='img' style={{display:"flex",justifyContent:"center"}} src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates"></img>
        <h1 className='text-center'>Spend Bill Gates Money</h1>
      </div>
    </div>
  )
}

export default Header