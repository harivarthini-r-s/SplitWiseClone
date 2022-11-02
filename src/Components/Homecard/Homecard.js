import './Homecard.css';
export default function Homecard({color,txt,desc,photo}) {
    
    // let ping = document.querySelectorAll(".card")
    // console.log(ping[0])
    // ping[0].style.backgroundColor = {color}
    return(
        <>
            <div className="card-1" style = {{backgroundColor : color}}>
                <div className="card-text">
                    <h2>{txt}</h2><br/>
                    <h3>{desc}</h3>
                </div>
                <div className="card-photo">
                    <img src={photo} alt=""/>
                </div>
            </div>
        </>
    );
}