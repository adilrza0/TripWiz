import React from 'react'
import styled from 'styled-components'

const Cart = () => {
  return (
    <DIV >
      <div className='cart-item'>
       
      </div>
      <div className='payment-page'></div>
    </DIV>
  )
}

export {Cart}

const DIV = styled.div`
  width: 95%;
  display: flex;
  gap:10px;
  margin: auto;
  margin-top: 30px;
  .cart-item{
    width: 70%;
    border: 1px solid black;
    height: 500px;

  }
  .payment-page{
    width: 28%;
    height: 500px;
    border: 1px dashed black;
  }
`