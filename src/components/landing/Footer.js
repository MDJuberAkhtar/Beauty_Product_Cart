import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <Fragment>
      <Container>
      <Row>
      <Col sm={5}>
      <p mb={3}>subscribe</p>
      <h1><input type='email' placeholder='Email address'/></h1>
      <p className='lil'>I would like to receive communications about Aesop products,
       services, stores, events and matters of cultural interest.</p>
      </Col>
       <Col sm={2}>
        <p mb={3}>Order & Support</p>
        <p>Contact us</p>
        <p>FAQs</p>
        <p>Delivery and returns</p>
        <p>Rinse and return</p>
        <p>Accessibility</p>
       </Col>
       <Col sm={2}>
       <p mb={3}>About</p>
       <p>Our story</p>
       <p>Careers</p>
       <p>Corporate gifts</p>
       <p>Facial appointments</p>
       <p>Accessibility</p>
       </Col>
       <Col sm={3}>
       <p mb={3}>Social media</p>
       <p>Instagram <ion-icon name="arrow-redo-sharp"></ion-icon></p>
       <p>Twitter <ion-icon name="arrow-redo-sharp"></ion-icon></p>
       <p>LinkedIn <ion-icon name="arrow-redo-sharp"></ion-icon></p>
       <p>WeChat <ion-icon name="arrow-redo-sharp"></ion-icon></p>
       <p>Weibo <ion-icon name="arrow-redo-sharp"></ion-icon></p>
       </Col>
      </Row>

     </Container>
     <div className='footend'>
        <p className='frtag'>Aesop</p>
        <p className='fltag'>India English</p>
     </div>
    </Fragment>
  );
}

export default Footer;
