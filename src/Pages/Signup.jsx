import React, { useState } from 'react'
import login from '../images/Signup.jpg'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postSignUpData } from '../Redux/authReducer/action'

const initialState = {
  userName:"",
  email:"",
  password:""
}

export default function Signup() {
  const [data, setData] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) =>{
    const {name,value} = e.target
     setData((prev)=>{
      return {...prev, [name]:value}
     })
  }

  const handleSignUp = (e)=>{
    e.preventDefault()
    console.log(data)
    dispatch(postSignUpData(data)).then(()=>{
        navigate("/login")
    })
    
    setData(initialState)
  }

    return (
        <DIV>
           <div className="signup_content">
                <div className='signup_form'>
                    <h1>Sign up</h1>
                    <form onSubmit={handleSignUp}>

                        <div>
                        <label >
                        <i class="zmdi zmdi-account"></i>
                        </label>
                            <input value = {data.userName} onChange={handleChange} type="text" name="userName" autoComplete='off' placeholder='Username'/>
                            <hr />
                        </div>
    
                        <div>
                          <label >
                          <i class="zmdi zmdi-email"></i>
                          </label>
                            <input value = {data.email} onChange={handleChange } type="email" name="email" autoComplete='off' placeholder='Email'/>
                            <hr />
                        </div>

                        <div>
                          <label >
                          <i class="zmdi zmdi-lock"></i>
                          </label>
                            <input value = {data.password} onChange={handleChange } type="password" name="password"  autoComplete='off' placeholder='Password'/>
                            <hr />
                        </div>
                        <p>Already have an account <Link to={"/login"} style={{color:"#1071db",fontWeight:"bold"}}>signin</Link></p>
                        <button type='submit'>Sign up</button>
                    </form>
                </div>
    
                <div className='signup_img'>
                    <img src={login}  alt="" />
                </div>
            </div>
        </DIV>
      )
}


const DIV = styled.div`
    .signup_content{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    width: 720px;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 70px;
    gap: 20px;
   
  }

  .signup_form{
     padding-top: 20px;
     margin-left: 15px;
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  } 

   input{
    width: 80%;
    height: 38px;
    font-size: large;
    border: none;
    padding-top: 15px;
  } 
  
  input:focus {
  outline: none;
}


  button{
    width: 50%;
    height: 35px;
    border: none;
    cursor: pointer;
    background-color: #1071db;
    color: white;
    border-radius: 20px;
    font-size: large;
  } 

  img{
    width: 100%;
    margin: auto;
  } 

  i{
    font-size: 25px;
    margin-right: 10px;
    color: #1071db;
  }

  h1{
    margin-top: -10px;
    font-size: 40px;
    font-weight: bold;
    color: #1071db;
  }

  @media screen and (max-width: 800px){
    .signup_content{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    width: 700px;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 70px;
    gap: 20px;
    padding: 10px;
  }
  }
`