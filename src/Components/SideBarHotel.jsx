import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Checkbox,
    Stack
  } from '@chakra-ui/react'

import styled from "styled-components";

export const SideBarHotel = () => {
  const [search,setSearchParams]=useSearchParams()
  const [category,setCategory]=useState(search.getAll("category")||[])
  const [order,setOrder]=useState(search.get("order")||"")

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
    order&&(params.order=order)
    setSearchParams(params)
  },[category,order,setSearchParams])
  return (
    <DIV>
      <h3>Filter by Category</h3>
      <Stack>
        <Checkbox size='lg' colorScheme="blue" type="checkbox" value={"Vilas"} onChange={handleCategory} checked={category.includes("Vilas")} >Vilas</Checkbox>
       

        <br />
        <Checkbox
         size='lg' colorScheme="blue"
          type="checkbox"
          value={"Resort"}
          onChange={handleCategory}
          checked={category.includes("Resort")} >Resort</Checkbox>
        
        <label>Resort</label>
        <br />
        <input
          
          type="checkbox"
          value={"Hotel"}
          onChange={handleCategory}
          checked={category.includes("Hotel")}
        />
        <label>Hotel</label>
        <br />
        <input
          data-testid="motivational-filter"
          type="checkbox"
          value={"Homestay"}
          onChange={handleCategory}
          checked={category.includes("Homestay")}
        />
        <label>Homestay</label>
        <br />
      </Stack>
      <br />
      <br />
      <h3>Sort By Price</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} onChange={handleOrder} checked={order==="asc"} />
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={handleOrder}
          checked={order==="desc"}
        />
        <label>Descending</label>
      </div>
      <div>
      <RangeSlider
        aria-label={['min', 'max']}
        colorScheme='blue'
        defaultValue={[10, 30]}
        >
        <RangeSliderTrack>
            <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
        </RangeSlider>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  font-size: 20px;
  text-align: left;
`;
