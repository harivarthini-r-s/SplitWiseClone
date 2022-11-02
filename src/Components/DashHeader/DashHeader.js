import React from 'react'
import {Link} from 'react-router-dom';
import logo from './../../Assets/full-logo-white.svg';
import userlogo from './../../Assets/userlogo.png';
import './DashHeader.css';


 export default function DashHeader(){
    let user = {
        name : "Harivarthini R"
    };
    return (
        <nav className = "DashboardNav fixed-top">
        <Link to = "/dashboard"><img className='split-logo' src={logo} alt=''></img></Link> 
     
     <div className = "Dashfloat">
     {/* <Link to = "/login"><button className = "logoutbtn" 
    //  onClick = {()=>{
    //    localStorage.removeItem('jwtToken');
    //  }
    //  }
     >Log Out</button></Link>  */}
      <img className = "profile" src={userlogo} alt="" />
      <label htmlFor="">{user.name}</label>
     </div>
    </nav>
    );
 }

// const mapStateToProps = state => {
//   console.log("state is  ", state);
//   return {
//     user: state.user
//   };
// };

// const fn = connect(mapStateToProps);
// export default fn(DashHeader);