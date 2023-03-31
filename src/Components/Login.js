import React from 'react'
import "../Styles/LoginStyles.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='mainBorder'>
        <form>
            <div>
                <label htmlFor='emailLogin'>Email*</label>
                <br></br>
                <input id='emailLogin'></input>
            </div>
            <div>
                <label htmlFor='passwordLogin'>Password*</label>
                <br></br>
                <input id='passwordLogin'></input>
            </div>
            <div>
                <input id='remember' type="checkbox"></input>
                <label htmlFor='remember'>Remember me</label>
            </div>
            <br></br>
            <div>
                <button>Login</button>
            </div>
        </form>
        <br></br>
        <div>
            <Link to="/Signup">create an account</Link>
        </div>
    </div>
  )
}

export default Login