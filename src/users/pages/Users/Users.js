import React from 'react';

import UsersList from './../../components/UsersList/UsersList';

function Users() {
  // List of users, eventually get from database
  const USERS = [
    {
      id: 1,
      name: 'Bill',
      location: 'Taiwan',
      placesCount: 5,
      image: 'RandomURL',
      age: 25
    }, {
      id: 2,
      name: 'Ruby',
      location: 'Hong Kong',
      placesCount: 4,
      image: 'RandomURL',
      age: 24
    }, {
      id: 3,
      name: 'Henry',
      location: 'Taiwan',
      placesCount: 5,
      image: 'RandomURL',
      age: 32
    },
  ]
  return (
    <div>
      {/* Returns the list of available users */}
      <UsersList users={USERS}/>
    </div>
  )
}

export default Users;