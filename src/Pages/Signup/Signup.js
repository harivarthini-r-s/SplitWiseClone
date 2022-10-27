import React, {useState} from "react";
import './Signup.css';
import InputBox from "../../Components/InputBox/InputBox";
import logo from './../../Assets/logo.svg';
import Dropdown from './../../Components/DropdownSignup/DropdownSignup.js'
import googlelogo from './../../Assets/googlelogo.png'
export default function Signup(){

    document.title = "Sign up :: Splitwise";
    const [formData, setFormData] = useState({name:"",email:"",password:""});
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
        if (validateEmail(value.userName) && (validatePassword(value.password))){ return true }
          else{ return false } 
    }
    
    const handleForm = (e) => {
        e.preventDefault()
        if(!valdation(formData)){
          alert('Wrong Data');
          return
        }
        sendForm("user/login",formData)
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
            <div className="signup-container">
                <div className="logo-img">
                    <img src={logo} alt=""></img>
                </div>
                <div className="signup-contents">
                    <h3>INTRODUCE YOURSELF</h3>
                    <br/>
                    <form action="/signup" method='POST' onSubmit={handleForm} className="form">
                    <label>
                            <span>Hi there! My name is </span><br/>
                            {/* <input type="text" name ="email" value={this.state.email} onChange={this.handleChange} /> */}
                            <InputBox onChange={handleChange} value={formData.name} type="text" name="name" placeholder="" className="input-box-1" />
                        </label>
                        <br/>
                        <label>
                            Here’s my <strong>email address:</strong><br/>
                            {/* <input type="text" name ="email" value={this.state.email} onChange={this.handleChange} /> */}
                            <InputBox onChange={handleChange} value={formData.email} type="text" name="email" placeholder="" className="input-box-2" />
                        </label>
                        <br/>
                        <label>
                            And here’s my <strong>password:</strong> <br/>
                            {/* <input type="text" name ="password" value={this.state.password} onChange={this.handleChange} /> */}
                            <InputBox onChange={handleChange} value={formData.password} type="password" name="password" placeholder="" className="input-box-2" />  
                        </label>
                        <br/>
                        <label>
                            And here’s the <strong>currency </strong>that I use: 
                            <Dropdown/>
                        </label>
                        <div className="sub">
                        <InputBox type="submit" value="Sign me up!"onSubmit={handleForm} className="submit-btn" /> 
                        <div className="sub-part">
                        <h5>or</h5>
                        <button className="googlebtn">
                            <img className="googlelogo" src = {googlelogo} alt = ""/>
                            <h3>
                            <a href= "https://accounts.google.com/v3/signin/identifier?dsh=S-1005915024%3A1666260100237264&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession">Sign up with Google</a>
                            </h3>
                        </button>
                        </div>
                        </div>
                    </form>
                    <div className="foot">
                        <a href="https://secure.splitwise.com/terms">By signing up, you accept the Splitwise Terms of Service.</a>
                        <br/><br/>
                        <h3>Don't use USD for currency?<a onClick="">Click here</a></h3>
                    </div>
                    
                </div>
            </div>
        </>
    );
}