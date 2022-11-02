import './Dashboard.css'
import AddFriend from '../../Components/AddFriends/AddFriends.js';
import Middle from '../../Components/MiddleDashboard/MiddleDashboard.js';
import Right from '../../Components/Right/Right';
import DashHeader from '../../Components/DashHeader/DashHeader.js';
import Left from '../../Components/Left/Left';
export default function Dashboard(){
    return(
        <>
            <div >
        
            <DashHeader/>
        
       
        <div className ="flex">
        <AddFriend />
        <Middle/>
        <Right/>
        </div>
    </div>
        </>
    );
}