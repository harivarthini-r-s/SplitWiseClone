import './Navbar_Login.css'
import logo from './../../Assets/full-logo-black.svg';
import { Link } from 'react-router-dom';


export default function Navbar_Login () {
    return(
        <>
            <div className="navbar">
                <a href = '/'><img className = "logo" src = {logo} alt = ""></img></a>
                <div className= "btns">
                <a className="login" href="/login">Log in</a>
                <Link to='/signup'><button className="signup-btn" href="/signup">Sign up</button></Link>
                </div>
            </div>
        </>
    );
}