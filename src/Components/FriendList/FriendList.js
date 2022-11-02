import React from "react";

export default function FriendList() {
    let friends = ["Pravin Kumar R","Kishore"];
  return (
    <ul>
      {/* {console.log(props.user.friends[5])} */}

      {friends.map(value =>  <li className="friendlist">
        <i class="fas fa-user" />
        <span>{value}</span>
      </li>)}
      
    </ul>
  );
};
