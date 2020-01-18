import React from 'react';

import UsersList from './../../components/UsersList/UsersList';

function Users() {
  // List of users, eventually get from database
  const USERS = [
    {
      name: 'Bill',
      location: 'Taiwan',
      placesCount: 5,
      image: 'RandomURL',
      age: 25
    }, {
      name: 'Ruby',
      location: 'Hong Kong',
      placesCount: 4,
      image: 'RandomURL',
      age: 24
    }
  ]
  return (
    <div>
      {/* Returns the list of available users */}
      <UsersList users={USERS}/>
    </div>
  )
}

export default Users;