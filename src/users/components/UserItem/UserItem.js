import React from 'react';

import ProfileImage from './../../../shared/images/avatar.png';

import Styles from './UserItem.module.css';

/**
 * 
 * @param {Object} props 
 * 
 */

function UsersList(props) {
  return (
    <div className={Styles.user_card}>
      <div className={Styles.avatar}>
        <img className={Styles.image} src={ProfileImage} alt={props.user.name}/>
      </div>
      <div>
        <h3>{props.user.name} {props.user.age}</h3>
      </div>
      <div className={Styles.user_info}>
        <h4>{props.user.placesCount} {props.user.placesCount > 0 ? "Places" : "Place"}</h4> 
      </div>
    </div>
  )
}

export default UsersList