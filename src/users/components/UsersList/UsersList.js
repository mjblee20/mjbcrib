import React from 'react';

import UserItem from './../UserItem/UserItem';
import Styles from './UsersList.module.css';

function UsersList(props) {
  return (
    <div className={Styles.userCard}>
      {props.users.map(user => (
        <UserItem user={user}/>
      ))}
    </div>
  )
}

export default UsersList