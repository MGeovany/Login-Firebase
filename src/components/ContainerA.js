import React from 'react'
import "./style.css";
import { useState } from 'react';

import { useAuth } from '../context/authContext'

import { useNavigate } from 'react-router-dom';



export const ContainerA = ({setChn}) =>{
  
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null)

  const {login, signup, loginWithGoogle, resetPassword} = useAuth();
  
  const navigate = useNavigate();

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async e =>{
    e.preventDefault();
    setError('');
    try {

      await signup(user.email, user.password)
      //navigate('/')
      setChn(true);
      
    } catch (error) {

      if(error.code === "auth/internal-error")
      setError("Correo Invalido");
    }

  }
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
   setError('');
    try {

    await login(user.email, user.password)
    navigate('/')
    setChn(true);
    
  } catch (error) {

    if(error.code === "auth/internal-error")
    setError("Correo Invalido");
  }
  }

  const handleGoogleSignIn = async() =>{

    try {
      await loginWithGoogle();
      navigate('/')
      
    } catch (error) {
      setError(error.message)
    }


  }

  const handleResetP = async() =>{
    if (!user.email) return setError("Please enter your email");
    try {
      await resetPassword(user.email);
      setError("We sent you an email with a link to reset your password")
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
    <div className="container a-container " id="a-container">
    {error && <p>{error}</p>}

    <form 
     className="form" 
     id="a-form"
     onSubmit={handleSubmit}
     >
      <h2 className="title form_title">Create Account</h2>
      <div className="color-bar"></div>

      <div>
        <button className="google"
         onClick={handleGoogleSignIn}
         >
          Login with Google 
        </button>
      </div>


      <span className="form__span">
        Or use your username for registration 
      </span>

      <div className="group">
        <input
         type="text"
         required 
         name="name"
         onChange={handleChange}
        >
        </input>
        
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Name</label>
      </div>

      <div className="group">
        <input 
         type="text" 
         required
         name='email'
         onChange={handleChange}
        >
        </input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Email</label>
      </div>

      <div className="group">
        <input 
         type="password" 
         required
         name='password'
         onChange={handleChange}
         >
           
         </input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Password</label>
      </div>

      <button className="form__button button submit"> SIGN UP </button>
    </form>
  </div>

  <div className="container b-container" id="b-container">
    <form 
     className="form"
     id="b-form"
     onSubmit={handleSubmitLogin}
     >
      <h2 className="form_title title">Sign in to Website</h2>
      <div className="color-bar"></div>

      <span className="form__span"> Or use your email account</span>

      <div className="group">
       
        <input
         type="text" 
         required  
         name="email"
         onChange={handleChange}
         >

         </input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Email</label>

      </div>

      <div className="group">

        <input 
         type="password"
         required
         name="password"
         onChange={handleChange}
         >

         </input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Password</label>
      </div>
      <a 
        href="/login"
        className="form__link" 
        onClick={handleResetP}>
        Forgot your password?
      </a>
      <button className="form__button button submit"> SIGN IN </button>
    </form>
  </div>
  <div className="switch" id="switch-cnt">
    <div className="switch__container" id="switch-c1">
      <h2 className="switch__title title">Welcome back</h2>
      <p className="switch__description description">
        To keep connected with us please login with your personal
        information
      </p>
      <button
        className="switch__button button switch-btn"
        onClick={() => setChn(true)}
        >
        {" "}
        SIGN IN
      </button>
    </div>

    <div className="switch__container is-hidden" id="switch-c2">
      <h2 className="switch__title title"> Hello Friend !</h2>
      <p className="switch__description description">
        {" "}
        Enter your personal details and start a journey with us
      </p>
      <button className="switch__button button switch-btn"
        onClick={() => setChn(false)}
      >
        SIGN UP
      </button>
    </div>
  </div>
  </>
  )
}
