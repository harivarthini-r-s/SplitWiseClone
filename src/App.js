
import './App.css';
import Signup from './Pages/Signup/Signup';
// import Login from './Pages/Login/Login.js'
// import Homepage from './Pages/Homepage/homepage';
// import Dropdown from './Components/Dropdown/Dropdown';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './Routes/Index'
import { useState } from 'react';
import Dashboard from './Pages/Dashboard/dashboard';
import Login from './Pages/Login/Login';

function App() {
  const [selected,setSelceted] = useState("")
  return (
    
    <div className="App">
    {/* <Homepage>
    </Homepage> */}
      <Signup/>
    {/* <Login/> */}
    {/* <Dropdown selected={selected} setSelected={setSelceted}/> */}
    </div>
    
  );
}

// function First() {
//   return (
//       <>
//           <h1>first</h1>
//       </>
//   );
// }
// function Second() {
//   return (
//       <>
//           <h1>second</h1>
//       </>
//   );
// }
// function Third() {
//   return (
//       <>
//           <h1>third</h1>
//       </>
//   );
// }

export default App;
