import purplegem from './../../Assets/purple-gem.png';
import googleplay from './../../Assets/googleplay.png';
import applestore from './../../Assets/applestore.png';
import mountain from './../../Assets/mountain.svg';
import './LoginFooter.css';


export default function LoginFooter(){
    return(
        <>
            <div className="footer-contents">
                    <div className="footer-links">
                        <div className="footer-splitwise">
                            <p>Splitwise</p>
                            <ul>
                                <li><a href="https://secure.splitwise.com/about">About</a></li>
                                <li><a href="https://secure.splitwise.com/press">Press</a></li>
                                <li><a href="https://blog.splitwise.com/">Blog</a></li>
                                <li><a href="https://secure.splitwise.com/jobs">Jobs</a></li>
                                <li><a href="https://www.splitwise.com/calculators">Calculators</a></li>
                                <li><a href="https://dev.splitwise.com/">API</a></li>
                            </ul>
                        </div>
                        <div className="footer-account">
                            <p>Account</p>
                            <ul>
                                <li><a href="">Log in</a></li>
                                <li><a href="">Sign up</a></li>
                                <li><a href="">Reset password</a></li>
                                <li><a href="">Settings</a></li>
                                <li><a href=""><img src={purplegem}></img>Splitwise Pro</a></li>
                            </ul>
                        </div>
                        <div className="footer-more">
                            <p>More</p>
                            <ul>
                                <li><a href="">Contact us</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Terms of Service</a></li>
                                <li><a href="">Privacy policy</a></li>
                                {/* <li><a href=""><img src={purplegem}></img>Splitwise Pro</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-download">
                        <div className = "links">
                            <div>
                            <img src={googleplay}></img>
                            <img src={applestore}></img>
                            </div>
                            <p>Made with :) in Providence, RI, USA</p>
                        </div>
                    </div>
                </div>
                <img src={mountain} alt=""></img>
        </>
    );
}