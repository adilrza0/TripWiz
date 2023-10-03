
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Checkbox,
    
  } from '@chakra-ui/react'

import styled from "styled-components";


export default function FlightSide() {
    const [search,setSearchParams]=useSearchParams()
    const [airline,setairline]=useState(search.getAll("airline")||[])
    const [order,setOrder]=useState(search.get("order")||"")
    const [minMax,setMinMax]=useState(search.get("range")||[1000,10000])
  
    useEffect(()=>{
      console.log(airline.includes("Vilas"))
    },[])
    
  
  
  
    const handleairline=(e)=>{
      const {value}=e.target
      let airlineData=[...airline]
      if(airlineData.includes(value)){
        airlineData=airlineData.filter(ele=>ele!==value)
      }
      else{
        airlineData.push(value)
      }
      setairline(airlineData)
  
    }
    const handleOrder=(e)=>{
      const {value}=e.target
      setOrder(value)
  
    }
    useEffect(()=>{
      let params={
        airline,
      }
      minMax[0]&&(params.min=minMax[0])
      minMax[1]&&(params.max=minMax[1])
      order&&(params.order=order)
      setSearchParams(params)
    },[airline,order,setSearchParams,minMax])
    return (
      <DIV>
        <div className="airline_filter">
        <h2>AirLines</h2>
        
         
          <Checkbox isChecked={airline.includes("IndiGo")} size='lg' colorScheme="blue"  value={"IndiGo"} onChange={handleairline} >IndiGo</Checkbox>
         
  
         
          <Checkbox 
           size='lg' colorScheme="blue"
            
            value={"Air India"}
            onChange={handleairline}
            isChecked={airline.includes("Air India")} >Air India</Checkbox>
          
          
         
          <Checkbox
            
            size='lg' colorScheme="blue"
            value={"Vistara"}
            onChange={handleairline}
            isChecked={airline.includes("Vistara")}>Vistara
            </Checkbox>
         
          
          <Checkbox
            
            size='lg' colorScheme="blue"
            value={"SpiceJet"}
            onChange={handleairline}
            isChecked={airline.includes("SpiceJet")}
          >SpiceJet</Checkbox>
          
        </div>
      
        
        <div className="slider">
        <h2>Price Range</h2>
        <RangeSlider colorScheme="blue"
        onChange={(e)=>setMinMax(e)}
        min={1000}
        max={10000}
          aria-label={['min', 'max']}
          defaultValue={[1000,8000]}
          >
          <RangeSliderTrack>
            
              <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb className="thumb"   index={0}>{minMax[0]}</RangeSliderThumb>
          <RangeSliderThumb  className="thumb"   index={1}>{minMax[1]}</RangeSliderThumb>
          </RangeSlider>
          
          
          
        </div>
        
        
        <div className="price_sort">
        <h3>Sort By Price</h3>
          <input className="radio" data-testid="sort-asc" type="radio" name="sort" value={"asc"} onChange={handleOrder} checked={order==="asc"} />
          <label>Ascending</label>
          <br />
          <input
            className="radio"
            data-testid="sort-desc"
            type="radio"
            name="sort"
            value={"desc"}
            onChange={handleOrder}
            checked={order==="desc"}
          />
          <label>Descending</label>
        </div>
        
      </DIV>
    );
  
}
const DIV=styled.div`
    >div{
  margin-bottom :20px;
}

  padding: 30px;
  
  width:18%;
  color: #0e0303;
  font-size: 18px;
  text-align: left;
  /* background-color:#1071DB;  */
  border: 1px solid #1071DB ;
  margin: 20px;
  //position: fixed;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  .slider{
    padding:20px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
    /* background-color:#1071DB;  */
    border: 1px solid #1071DB ;
    border-radius: 5px;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
  }
  .airline_filter{
    h2{
      margin-bottom:8px;
      
    }
    
    display: flex;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;; */
    padding: 20px;
    border-radius: 5px;
    flex-direction: column;
    /* background-color:#1071DB;  */
    border: 1px solid #1071DB ;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
  }
  .price_sort{
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;; */
    border: 1px solid #1071DB ;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  } 
  input[type='radio'] {
    width: 19px;
    height: 19px;
    margin-right: 10px;
   
    accent-color: #1071DB;
        
        
    }
  .thumb{
    color: transparent;
  }
  .thumb:hover{
      font-size: 10px;
      font-weight: bold;
      width: 30px;
      height: 30px;
      color: #1071DB;
  }
`
