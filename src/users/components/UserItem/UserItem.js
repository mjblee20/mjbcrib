import React from 'react';

import Styles from './UserItem.module.css';

/**
 * 
 * @param {Object} props 
 * 
 */

function UsersList(props) {
  return (
    <div className={Styles.userCard}>
      <div className={Styles.Avatar}>
        <img src="#" alt={props.user.name}/>
      </div>
      <h3>{props.user.name} {props.user.age}</h3>
      <h4>{props.placesCount} {props.user.placesCount > 0 ? "Places" : "Place"}</h4>
    </div>
  )
}

export default UsersList