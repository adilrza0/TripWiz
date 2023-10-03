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

export const SideBarHotel = () => {
  const [search,setSearchParams]=useSearchParams()
  const [category,setCategory]=useState(search.getAll("category")||[])
  const [order,setOrder]=useState(search.get("order")||"")
  const [minMax,setMinMax]=useState(search.get("range")||[0,30000])

  useEffect(()=>{
    console.log(category.includes("Vilas"))
  },[])
  



  const handleCategory=(e)=>{
    const {value}=e.target
    let categoryData=[...category]
    if(categoryData.includes(value)){
      categoryData=categoryData.filter(ele=>ele!==value)
    }
    else{
      categoryData.push(value)
    }
    setCategory(categoryData)

  }
  const handleOrder=(e)=>{
    const {value}=e.target
    setOrder(value)

  }
  useEffect(()=>{
    let params={
      category,
    }
    minMax[0]&&(params.min=minMax[0])
    minMax[1]&&(params.max=minMax[1])
    order&&(params.order=order)
    setSearchParams(params)
  },[category,order,setSearchParams,minMax])
  return (
    <DIV>
      <div className="category_filter">
      <h2>Category</h2>
      
       
        <Checkbox isChecked={category.includes("Vilas")} size='lg' colorScheme="blue"  value={"Vilas"} onChange={handleCategory} >Vilas</Checkbox>
       

       
        <Checkbox 
         size='lg' colorScheme="blue"
          
          value={"Resort"}
          onChange={handleCategory}
          isChecked={category.includes("Resort")} >Resort</Checkbox>
        
        
       
        <Checkbox
          
          size='lg' colorScheme="blue"
          value={"Hotel"}
          onChange={handleCategory}
          isChecked={category.includes("Hotel")}>Hotel
          </Checkbox>
       
        
        <Checkbox
          
          size='lg' colorScheme="blue"
          value={"Homestay"}
          onChange={handleCategory}
          isChecked={category.includes("Homestay")}
        >HomeStay</Checkbox>
        
      </div>
    
      
      <div className="slider">
      <h2>Price Range</h2>
      <RangeSlider colorScheme="blue"
      onChange={(e)=>setMinMax(e)}
      min={500}
      max={30000}
        aria-label={['min', 'max']}
        defaultValue={[500,30000]}
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
};

const DIV = styled.div`
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
  .category_filter{
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
`;
