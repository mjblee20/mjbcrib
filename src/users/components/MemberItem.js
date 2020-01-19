import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from './../../shared/images/avatar.png';

import Card from '../../shared/components/Card'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './MemberItem.css';

function MemberItem(props) {
  return (
    <li className='member_item'>
      <Card className=
      'member_card'>
        <Link to={`/${props.member.id}/places`}>
          <Container className='member_card_container'>
            <Row className='member_card_content'>
              <Col className='avatar'>
              {/* Here goes the Avatar */}
                <img className='member_card_image' src={ProfileImage} alt={props.member.name}/>
              </Col>
              <Col className='member_card_info'>
              {/* Here goes the name of member and # of places */}
                <div>
                  <h2 className='member_name'>{props.member.name}</h2>
                </div>
                <div>
                  <h6>{props.member.placeCount} {props.member.placeCount > 0 ? "Places" : "Place"}</h6> 
                </div>
              </Col>
            </Row> 
          </Container>
        </Link>
      </Card>
    </li>
    
  )
}

export default MemberItem;