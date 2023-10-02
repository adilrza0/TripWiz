import React from 'react'
import styled from 'styled-components'

export default function Pagination({updatePage,totalPages,currentpage}) {
    const Pages=new Array(totalPages).fill(-1)
   
  return (
    <DIV>
        {Pages.map((ele,ind)=>{
            return <button key={ind} disabled={ind+1===currentpage} onClick={()=>updatePage(ind+1)} className={ind+1===currentpage?"currPage":""}>{ind+1}</button>
        })}
    </DIV>
  )
}
const DIV=styled.div`
    button{
        width: 40px;
        height: 40px;
        margin: 5px;
        background-color: #1071DB;
        border-radius: 50%;
        color: white;
        border:1px solid white;

    }
    .currPage{
        background-color: #ffffff;
        color: #1071DB;
        border: 1px solid #1071DB;
    }
`
