import React from "react"
import userlogo3 from './../../Assets/userlogo3.png'
import userlogo2 from './../../Assets/userlogo2.png'
import OweList from "../OweList/OweList";
import './MiddleDashboard.css'
// import userlogo2 from '../../Assets/userlogo2.png'
// import userlogo3 from '../../Assets/userlogo3.png' 
export let list = [
  {name : "Pravin Kumar R", owe : 30.00, owed : 60.00},
  {name : "Kishore", owe : 12.50, owed : 0.00}
];
let balance=0.00 ,towe=0.00,towed=0.00;
function calc() {
  list.map(calculate);
   
  balance = towed-towe;
  balance = Number.parseFloat(balance);
  towe = Number.parseFloat(towe);
  towed = Number.parseFloat(towed);
}
function calculate(friend) {
  towe+=friend.owe;
  towed+=friend.owed;
}
function viewAsList(){
  return(
    <>
      <div className="flex">
        
      </div>
    </>
  );
}
function viewAsChart(){
  return(
    <>
    
    </>
  );
}

export default function Middle(){
  calc();
    return (
      <div className="Middle">
        <div className="middle-header">
          <div>
            <h1>Dashboard</h1>
          </div>
          <div>
            <button className="expbtn">Add an expense</button>
            <button className="setbtn">Settle up</button>
          </div>
        </div>
        <hr/>
        <div className="middle-list">
          <div>
            <h3>total balance</h3>
            <h2>${balance}.00</h2>
          </div>
          <div class = "vertical"></div>
          <div>
            <h3>you owe</h3>
            <h2>${towe}.00</h2>
          </div>
          <div class = "vertical"></div>
          <div>
            <h3>you are owed</h3>
            <h2>${towed}.00</h2>
          </div>
        </div>
        <hr/>
        <div className="middle-card">
          <div className="flex-list">
            <h3>YOU OWE</h3>
            <button onClick={viewAsList}>view as list</button>
          </div>
          <div className="flex-list">
            <button onClick={viewAsChart}>view as chart</button>
            <h3>YOU ARE OWED</h3>
          </div>
        </div>
        <div className="middle-list-owe">
          <div className="list-1">
            <div>
              <img className="userlogo" src={userlogo3} alt=""></img>
            </div>
            <div>
              <h3>{list[1].name}</h3>
              <h5>you owe <strong>${list[1].owe}0</strong></h5>
            </div>
          </div>
          <div class = "vertical"></div>
          <div className="list-2">
            <div>
              <img className="userlogo" src={userlogo2} alt=""></img>
            </div>
            <div>
              <h3>{list[0].name}</h3>
              <h5>owes you <strong>${list[0].owed}.00</strong></h5>
            </div>
          </div>
        </div>
      </div>
    );
  };













//   <div className="MidDash">
//   <div className="DashHeader">
//     <h3>Dashboard</h3>
//     <button className="btn float-right settle" >
//       Settle up
//     </button>
//     <button className="btn float-right expense" >
//       Add an expense
//     </button>
//   </div>

//   <div className="total">
//     <div className="fitting">
//       <label htmlFor="">total balance</label>
//       <p className="green">$18.50</p>
//     </div>
//     <div className="fitting">
//       <label htmlFor="">you owe</label>
//       <p style = {{color:"#fd6e60"}}>$12.50</p>
//     </div>
//     <div className="fitting">
//       <label htmlFor="">you are owed</label>
//       <p className="green">$31.00</p>
//     </div>
//   </div>
// </div>

// <div className="totalCollection">
//   <div>
//     <label htmlFor="">YOU OWE</label>
//   </div>
//   <div>
//     <label htmlFor="" className="float-right mr-4">
//       YOU ARE OWED
//     </label>
//   </div>
// </div>
// <div className = "flex">
//   <div className="float-left ml-3 borders">
//     <ul>
//     <li>
//       {/* {(owe.length == 0)?<li>You do not owe anything</li>:owe.map(value=>
//        <li> */}
//        <img
//          className="imgs"
//          src={userlogo3}
//          alt="" align="left"
//        />
//        <div className="inline">
//          <h5>Kishore</h5>
//          <span>you owe $12.50</span>
//        </div>
//      </li>
      
//     </ul>
//   </div>



//   <div>
//     <ul>
//     {/* {(owed.length == 0)?<li>You do not owe anything</li>:owed.map(value=> */}
//       <li>
//       <img
//         className="imgs"
//         src={userlogo2}
//         alt=""
//         align="left"
//       />
//       <div className="inline">
//         <h5>Pravin Kumar R</h5>
//         <span>owes you $31.00</span>
//       </div>
//     </li>  
//     </ul>
//   </div>
// </div>