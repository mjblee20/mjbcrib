import React from 'react';

import MemberItem from './MemberItem';
import Card from '../../../shared/components/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './MembersList.css';

function MembersList(props) {
  if (props.members.length === 0) {
    return (
      <Card>
        <h2>No members are found</h2>
      </Card>
    )
  }
  
  return (
    <Container className='members-container'>
      <Row className='members-list'>
        {props.members.map(member => (
          <Col xs={12} md={6} xl={4}>
            <MemberItem member={member}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MembersList