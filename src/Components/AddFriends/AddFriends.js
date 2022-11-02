import React from 'react';
import FriendList from './../FriendList/FriendList.js'
import './AddFriend.css'
export default function AddFriend(props) {
    return(
        <div className = "AddFriend">
         
         <div className = "content">
         <div className = "friendHeader" >
            <label htmlFor="">FRIENDS</label>
            <button className = "AddFrnd float-right">+add</button>
          
         </div>
         <div className = "Friend_List">
               <FriendList/>
         </div>
         </div>

        </div>
    )
}