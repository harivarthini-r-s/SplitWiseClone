import './Homecard1.css';
import homecard5 from './../../Assets/homecard5.png'
export default function Homecard1() {
    return(
        <>
            <div className="card-1" style = {{backgroundColor : "#8457c8"}}>
                <div className="card-text">
                    <h2>Get even more with PRO</h2><br/>
                    <h3>Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</h3>
                </div>
                <div className="card-photo">
                    <img src={photo} alt=""/>
                </div>
            </div>
        </>
    );
}