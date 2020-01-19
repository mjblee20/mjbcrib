import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from './../../../shared/images/avatar.png';
import Card from './../../../shared/components/Card/Card'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Styles from './UserItem.module.css';

function UsersList(props) {
  return (
    <li className={Styles.user_item}>
      <Card className={Styles.user_card}>
        <Link to={`/${props.user.id}/places`}>
          <Container fluid className={Styles.user_card_container}>
            <Row className={Styles.user_card_content}>
              <Col className={Styles.avatar}>
              {/* Here goes the Avatar */}
                <img className={Styles.user_card_image} src={ProfileImage} alt={props.user.name}/>
              </Col>
              <Col className={Styles.user_card_info}>
              {/* Here goes the name of user and # of places */}
                <h5>{props.user.name}</h5>
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