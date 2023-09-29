import React from 'react'
import login from '../images/Login2.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Login() {
  
  return (
    <DIV>
       <div className="login_content">
            <div className='login_form'>
                <h1>Sign In</h1>
                <form >

                    <div>
                      <label >
                      <i class="zmdi zmdi-email"></i>
                      </label>
                        <input type="email" name="email" autoComplete='off' placeholder='Email'/>
                        <hr />
                    </div>
                    <div>
                      <label >
                      <i class="zmdi zmdi-lock"></i>
                      </label>
                        <input type="password" name="password"  autoComplete='off' placeholder='Password'/>
                        <hr />
                    </div> 
                    <Link>Forgot password</Link>
                    <p>Create new account <Link to={"/signup"}>signup</Link></p>
                    <button>Sign in</button>
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
  } 

   input{
    width: 80%;
    height: 38px;
    font-size: large;
    border: none;
   
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
    gap: 20px;
    padding: 10px;
  }
  }
`
