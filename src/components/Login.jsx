// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';
import "./loginStyle.css";
const Login = () => {
  // this state for cange the login and sign up text 
  const [isLoginSignup, setIsLoginSignup] = useState("Log In");
  // this state for hide and unhide the name div 
  const [isSignupFormVisible, setIsSignupFormVisible] = useState(false);
    //  this state for change the text of Dont have an account and back to login 
  const [textToSignup, setTextToSignup] = useState("Don't have an account? ");

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  const swapImages = () => {
    const tempSrc = img1Ref.current.src;
    img1Ref.current.src = img2Ref.current.src;
    img2Ref.current.src = img3Ref.current.src;
    img3Ref.current.src = tempSrc;
  };

  const signupform=()=>{
    const newState = isLoginSignup === "Log In" ? "Sign Up" : "Log In";
    
      setIsLoginSignup(newState);

      setIsSignupFormVisible(!isSignupFormVisible);
      
      const newStateToSignupAndBack = textToSignup === "Don't have an account? " ? "Back to Login ! " : "Don't have an account? ";

      setTextToSignup(newStateToSignupAndBack);
  }


  useEffect(() => {
    // Run the swapImages function every 2000 milliseconds (2 seconds)
    const intervalId = setInterval(swapImages, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);



  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="container">
      {/* for images animation */}
      <div className="phone">
        <img src="phone.jpeg" alt="phone" />
        <img ref={img1Ref} className="img1" src="img1.jpeg" alt="Image 1" />
        <img ref={img2Ref} className="img2" src="img2.jpeg" alt="Image 2" />
        <img ref={img3Ref} className="img3" src="img3.jpeg" alt="Image 3" />
      </div>

      {/* for login section  */}

       
<div className="main">
  <form>
    <h1>{isLoginSignup}</h1>
    
    <div className={`group ${isSignupFormVisible ? '' : 'signup-hidden'}`}>
      <input type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Name</label>
    </div>

    

    <div className="group">
      <input type="email" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Email</label>
    </div>

    <div className="group">
      <input type="password" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Password</label>
    </div>

    <div className={`group ${isSignupFormVisible ? '' : 'signup-hidden'}`}>
      <input type="password" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Confirm Password</label>
    </div>
    

    <h5 className={`${isSignupFormVisible ? 'signup-hidden': ''}`}>forget password? <span className='forget-link' >click here</span></h5>
    
    <div className="btn-box">
      <button className="btn btn-submit" type="submit">{isLoginSignup}</button>
      {/* <button className="btn btn-cancel" type="button">cancel</button> */}
      
    </div>

    <div className="sign-up">
      <h5>{textToSignup} <span className='signup-link' onClick={signupform}>click here</span> </h5>
      
    </div>
  </form>

</div>


    </div>
  );
};


export default Login
