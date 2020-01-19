import React from 'react';

import UserItem from './../UserItem/UserItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Styles from './UsersList.module.css';

function UsersList(props) {
  return (
    <Container>
      <Row className={Styles.usersList}>
        {props.users.map(user => (
          <Col xs={12} md={6} xl={4}>
            <UserItem user={user}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default UsersList