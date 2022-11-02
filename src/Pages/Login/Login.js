import React, {useState} from "react";
import './Login.css';
import InputBox from "../../Components/InputBox/InputBox";
import NavBar from './../../Components/Navbar_Login/Navbar_Login'
import LoginFooter from "../../Components/LoginFooter/LoginFooter";
// import {Link} from 'react-router-dom'
// import './../../Routes/Index'
import googlelogo from './../../Assets/googlelogo.png';

import axios from 'axios'

const api = axios.create({
    baseURL:'http://192.168.1.127:5000'
})

export default function Login() {

    api.get('/hello')
    .then(res => {
        console.log(res.data)
    })

    document.title = "Log in :: Splitwise";
    const [formData, setFormData] = useState({email:"",password:""});
    const [navigate, setNavigate] = useState(false);

    const validateEmail = (email) => {
        /* eslint-disable */
        return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    };  
    const validatePassword = (password) => {
        /* eslint-disable */
        return password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);
    };
    
    
    
    const handleChange = (e) => {
        let {name, value} = e.target
        setFormData({...formData, [name]: value});
      }
    
    const valdation = (value) => {
        if (validateEmail(value.email) && (validatePassword(value.password))){ return true }
          else{ return false } 
    }
    
    
    const handleForm = (e) => {
        e.preventDefault()
        if(!valdation(formData)){
          alert('Wrong Data');
          return
        }
        // sendForm("user/login",formData)
        api.post("/auth/login",formData)
        .then(res => {
          console.log(res);
          sessionStorage.setItem('tokenKey', res.accessToken);
          setNavigate(true)
        })
        .catch(err => {
          console.log(err)
        })
      }
   
    return(
        <>
            <div className="login-container">
                <div className="header">
                    <NavBar/>
                    <br></br>
                </div>
                <div className="body">
                <div className="center-body">
                    <div className="head">
                        Log in
                    </div>
                    <form action="/login" method='POST' onSubmit={handleForm} className="form">
                        <label>
                            Email address
                            {/* <input type="text" name ="email" value={this.state.email} onChange={this.handleChange} /> */}
                            <InputBox onChange={handleChange} value={formData.email} type="text" name="email" placeholder="" className="input-box" />
                        </label>
                        <br/>
                        <label>
                            Password
                            {/* <input type="text" name ="password" value={this.state.password} onChange={this.handleChange} /> */}
                            <InputBox onChange={handleChange} value={formData.password} type="password" name="password" placeholder="" className="input-box" />  
                        </label>
                        <br/>
                        <InputBox type="submit" value="Log in" className="submit" />  
                    </form>
                    <a className="forgot-password" href="/">Forgot password?</a>
                    <div className="or">
                        <hr className="hr-line"/>
                        <div className="inline">or</div>
                        <hr className="hr-line"/>
                    </div>
                    <button className="google-btn">
                        <img className="google-logo" src = {googlelogo} alt = ""/>
                        <h3><a href= "https://accounts.google.com/v3/signin/identifier?dsh=S-1005915024%3A1666260100237264&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession">Sign in with Google</a></h3>
                    </button>
                    
                </div>
                </div>
            </div>  
            <footer className="footer">
                <LoginFooter/>
            </footer>         
        </>
    );
}

