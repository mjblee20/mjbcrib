import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from './../../shared/images/avatar.png';

import Card from './../../shared/components/Card'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './UserItem.css';

function UsersList(props) {
  return (
    <li className='user_item'>
      <Card className=
      'user_card'>
        <Link to={`/${props.user.id}/places`}>
          <Container fluid className='user_card_container'>
            <Row className='user_card_content'>
              <Col className='avatar'>
              {/* Here goes the Avatar */}
                <img className='user_card_image' src={ProfileImage} alt={props.user.name}/>
              </Col>
              <Col className='user_card_info'>
              {/* Here goes the name of user and # of places */}
                <h5 className='user_name'>{props.user.name}</h5>
                <h6>{props.user.placesCount} {props.user.placesCount > 0 ? "Places" : "Place"}</h6> 
              </Col>
            </Row> 
          </Container>
        </Link>
      </Card>
    </li>
    
  )
}

export default UsersList;