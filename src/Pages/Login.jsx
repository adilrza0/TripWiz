import React, { useEffect, useState } from 'react'
import login from '../images/Login2.png'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { checkLogin, getUserData } from '../Redux/authReducer/action'
// import { Button, useToast } from '@chakra-ui/react'

export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let {loginData,isAuth} = useSelector((store) => {
    return{
    loginData : store.authReducer.loginData,
    isAuth : store.authReducer.isAuth
    }
  },shallowEqual)

  
  useEffect(()=>{
    console.log(isAuth)
    dispatch(getUserData)
  },[window.location.pathname])

  const handleLogin = (e) =>{
    e.preventDefault()
 
    dispatch(checkLogin(email,password,navigate,loginData))
  }

  // console.log( "logindata => ",loginData)

  return (
    <DIV>
       <div className="login_content">
            <div className='login_form'>
                <h1>Log in</h1>
                <form onSubmit={handleLogin} >
                
                    <div>
                      <label >
                      <i class="zmdi zmdi-email"></i>
                      </label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" autoComplete='off' placeholder='Email'/>
                        <hr />
                    </div>
                    <div>
                      <label >
                      <i class="zmdi zmdi-lock"></i>
                      </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password"  autoComplete='off' placeholder='Password'/>
                        <hr />
                    </div> 
                    <Link>Forgot password</Link>
                    <p>Create new account <Link to={"/signup"} style={{color:"#1071db",fontWeight:"bold"}}>signup</Link></p>
                    <button type='submit'>Sign in</button>
                </form>
            </div>

            <div className='login_img'>
                <img src={login}  alt="" />
            </div>
        </div>
    </DIV>
  )
}


const DIV = styled.div`
  
  .login_content{
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    width: 700px;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 100px;
    gap: 20px;
   
  }

  .login_form{
     padding-top: 20px;
     margin-left: 15px;
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    gap: 30px;
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
    font-size: 40px;
    font-weight: bold;
    margin-top: -10px;
    color: #1071db;
  }

  @media screen and (max-width: 800px){
    .login_content{
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
