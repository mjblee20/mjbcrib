import React from 'react';

import MembersList from './../components/Members/MembersList';

import Row from 'react-bootstrap/Row';

function Users() {
  // List of users, eventually get from database
  const USERS = [
    {
      id: 1,
      name: 'Bill',
      image: 'RandomURL',
      placeCount: 4
    }, {
      id: 2,
      name: 'Ruby',
      image: 'RandomURL',
      placeCount: 4
    }, {
      id: 3,
      name: 'Rango',
      image: 'RandomURL',
      placeCount: 4
    }, {
      id: 3,
      name: 'Dewey',
      image: 'RandomURL',
      placeCount: 4
    },
  ]
  
  return (
    <div>
      <Row id='about-header'>
          <h1>Members of MJB Crib</h1>
      </Row>
      {/* Returns the list of available users */}
      <MembersList members={USERS}/>
    </div>
  )
}

export default Users;