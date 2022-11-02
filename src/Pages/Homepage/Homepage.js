
import HomeIcon from '../../Components/HomeIcon/HomeIcon.js';
import Navbar from '../../Components/Navbar_Login/Navbar_Login.js'
import LoginFooter from './../../Components/LoginFooter/LoginFooter.js'
import plane from './../../Assets/plane.png';
import apple from './../../Assets/apple.svg';
import android from './../../Assets/android.svg';
import homecard1 from './../../Assets/homecard1.png';
import homecard2 from './../../Assets/homecard2.png';
import homecard3 from './../../Assets/homecard3.png';
import homecard4 from './../../Assets/homecard4.png';
import Homecard from '../../Components/Homecard/Homecard.js';
// import homecard5 from './../../Assets/homecard5.png';
import './Homepage.css'
import { Link } from 'react-router-dom';

export default function Homepage(){
    document.title = "Split expenses with friends. ::Splitwise";
    
    let list1 = [
        { color :"#373c40",photo:homecard1, txt : "Track balances", desc : "Keep track of shared expenses, balances, and who owes who."},
        { color :"#1ebc9b",photo:homecard2, txt : "Organize expenses", desc : "Split expenses with any group: trips, housemates, friends, and family."}
    ];
    let list2 = [
        { color :"#ec7041",photo:homecard3, txt : "Add expenses easily", desc : "Quickly add expenses on the go before you forget who paid."},
        { color :"#373c40",photo:homecard4, txt : "Pay friends back", desc : "Settle up with a friend and record any cash or online payment."}
    ];

    return(
        
        <div className = "homepage-container">
           <div className='homepage-header'>
                <Navbar/>
           </div>
           <div className='homecontainer-1'>
           <div className='main-1'>
                <div className='sub-1'>
                    <h1>Less stress when sharing expenses <span>on trips.</span></h1>
                    <HomeIcon/>
                    <p>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family. </p>
                    <Link to='/signup'><button className='signupbtn'>Sign up</button></Link>
                    <h3>Free for <img src={apple} alt=''></img> iPhone, <img src={android} alt=''></img> Android, and web.</h3>
                </div>
                <div className='sub-2'>
                    <img src={plane} alt=''></img>
                </div>
                </div>
                <div className='main-2'>
                    <div className='card'>
                        {list1.map((data)=> { return (<Homecard color={data.color} photo={data.photo} desc={data.desc} txt={data.txt} />)})}
                    </div>
                    <div className='card'>
                        {list2.map((data)=> { return (<Homecard color={data.color} photo={data.photo} desc={data.desc} txt={data.txt} />)})}
                    </div>
                </div>
           </div>
          <LoginFooter/>
        </div>
        
    );
}