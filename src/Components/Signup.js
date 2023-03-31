import React,{useRef} from 'react'
import "../Styles/SignupStyles.css"
import { Link } from 'react-router-dom'
function Signup() {

  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let mobileInputRef = useRef();
  let genderInputRef = useRef();
  let maritalStatusInputRef = useRef();

  let firstNameValidation=()=>{
    var regex=/^[A-Za-z\s+]{2,25}$/;
    let result=regex.test(firstNameInputRef.current.value);
    if (result==true) {
      firstNameInputRef.current.style.border="";
    } else {
      firstNameInputRef.current.style.border="4px solid red";
    }
  }

  let lastNameValidation=()=>{
    var regex=/^[A-Za-z\s+]{2,20}$/;
    let result=regex.test(lastNameInputRef.current.value);
    if (result==true) {
      lastNameInputRef.current.style.border="";
    } else {
      lastNameInputRef.current.style.border="4px solid red";
    }
  }

  let emailValidation=()=>{
    var regex=/^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
    let result=regex.test(emailInputRef.current.value);
    if (result==true) {
      emailInputRef.current.style.border="";
    } else {
      emailInputRef.current.style.border="4px solid red";
    }
  }

  let mobileValidation=()=>{
    var regex=/^[\]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,4}$/im
    let result=regex.test(mobileInputRef.current.value);
    if (result==true) {
      mobileInputRef.current.style.border="";
    } else {
      mobileInputRef.current.style.border="4px solid red";
    }
  }

  let passwordValidation=()=>{
    var regex=/^(?=.*)(?=.*[a-z])(?=.*[a-z])(?=.*[a-z]).{8,}/
     let result=regex.test(passwordInputRef.current.value);
     if (result==true) {
      passwordInputRef.current.style.border="";
     } else {
      passwordInputRef.current.style.border="4px solid red";
     }
  }

  let genderValidation=()=>{
    var regex=/^[malefemale]{4,6}$/;
    let result=regex.test(genderInputRef.current.value);
    if (result==true) {
      genderInputRef.current.style.border="";
    } else {
      genderInputRef.current.style.border="4px solid red";
    }
  }

  let maritalStatusValidation=()=>{
    var regex=/^[single,married]{6,7}$/;
    let result=regex.test(maritalStatusInputRef.current.value);
    if (result==true) {
      maritalStatusInputRef.current.style.border="";
    } else {
      maritalStatusInputRef.current.style.border="4px solid red";
    }
  }

  let onSignup=async()=>{

    let dataToSend = new FormData();
    dataToSend.append("firstName",firstNameInputRef.current.value);
    dataToSend.append("lastName",lastNameInputRef.current.value);
    dataToSend.append("email",emailInputRef.current.value);
    dataToSend.append("mobileno",mobileInputRef.current.value);
    dataToSend.append("password",passwordInputRef.current.value);
    dataToSend.append("gender",genderInputRef.current.value);
    dataToSend.append("maritalStatus",maritalStatusInputRef.current.value)

    let reqOptions={
      method:"POST",
      body:dataToSend
    }
     let rawData =await fetch("http://localhost:2233/signup",reqOptions);
     let convertedData = await rawData.json();
     console.log(convertedData);
     alert("account created Successfully")
  }
  return (
    <div className='mainBorder'>
      <h1>Sign up</h1>
      <form>
        <div> 
          <label htmlFor='firstName'>First Name*</label>
          <br></br>
          <input id='firstName' ref={firstNameInputRef} onChange={()=>{
            firstNameValidation();
          }}></input>
        </div>
        <div>
          <label htmlFor='lastName'>Last Name*</label>
          <br></br>
          <input id='lastName' ref={lastNameInputRef} onChange={()=>{
            lastNameValidation();
          }}></input>
        </div>
        <div>
          <label htmlFor='email'>Email*</label>
          <br></br>
          <input id='email' ref={emailInputRef} onChange={()=>{
            emailValidation();
          }}></input>
        </div>
        <div>
          <label htmlFor='mobile'>Mobile*</label>
          <br></br>
          <input id='mobile' ref={mobileInputRef} onChange={()=>{
            mobileValidation();
          }}></input>
        </div>
        <div>
          <label htmlFor='password'>Password*</label>
          <br></br>
          <input id='password' ref={passwordInputRef} onChange={()=>{
            passwordValidation();
          }}></input>
        </div>
        <div>
          <label htmlFor='gender'>Gender*</label><label style={{ fontSize:"small"}}>(small letters only)</label>
          <br></br>
          <input id='gender' ref={genderInputRef} onChange={()=>{
            genderValidation();
          }}></input>
        </div>
        <div>
          <label htmlFor='maritalStatus'>Marital Status*</label><label style={{ fontSize:"small"}}>(small letters only)</label>
          <br></br>
          <input id='maritalStatus' ref={maritalStatusInputRef} onChange={()=>{
            maritalStatusValidation();
          }}></input>
          <br></br>
          <label style={{ fontSize:"small"}}>( Ex: single or married)</label>
        </div>
        <br></br>
        <div>
          <button onClick={()=>{
            onSignup();
          }} type='button' >sign up</button>
        </div>
      </form>
      <br></br>
      <div>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  )
}

export default Signup