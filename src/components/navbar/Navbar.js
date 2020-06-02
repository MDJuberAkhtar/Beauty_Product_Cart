import React, {Fragment, useEffect, useState} from 'react';
import {Navbar, Nav, Modal, Button, Form } from 'react-bootstrap';
import Top from './Top';
import Cart from './Cart';
import Shop from './Shop';
import Read from './Read';
import Stores from './Stores';
import Search from './Search';
import { connect } from 'react-redux';
import { getNumbers } from '../../actions/getAction';

const Navbars = (props) => {

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Good Morning
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Please enter a Valid email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
</Form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" size="lg" block>
          Continue
        </Button>
        </Modal.Footer>
      </Modal>
    );
  }


    const [modalShow, setModalShow] = React.useState(false);
    const [topbarOpen, setTopbarOpen] = useState(false);
    const openTopHandler = ()=>{
      if(!topbarOpen){
        setTopbarOpen(true)
      }else {
        setTopbarOpen(false)
      }
    }

    const topbarCloseHandler =()=>{
      setTopbarOpen(false)
    }

    let topbar
    if(topbarOpen){
      topbar= <Cart close={topbarCloseHandler} topbar={"topbar"}/>
    }

    const [sidenavbarOpen, setSidenavbarOpen] = useState(false)

    const opennavHandler = ()=>{
      if(!sidenavbarOpen){
        setSidenavbarOpen(true)

      }else {
        setSidenavbarOpen(false)
      }
    }

    const sidenavbarCloseHandler =()=>{
      setSidenavbarOpen(false)
    }

    let sidenavbar
    if(sidenavbarOpen){
      sidenavbar= <Shop close={sidenavbarCloseHandler} sidenavbar={"sidenavbar"}/>
    }

    const [sidereadbarOpen, setSidereadbarOpen] = useState(false)

    const openreadHandler = ()=>{
      if(!sidereadbarOpen){
        setSidereadbarOpen(true)
      }else {
        setSidereadbarOpen(false)
      }
    }

    const sidereadbarCloseHandler =()=>{
      setSidereadbarOpen(false)
    }

    let sidereadbar
    if(sidereadbarOpen){
      sidereadbar= <Read close={sidereadbarCloseHandler} sidenavbar={"sidenavbar"}/>
    }

    const [sidestorebarOpen, setSidestorebarOpen] = useState(false)

    const openstoreHandler = ()=>{
      if(!sidestorebarOpen){
        setSidestorebarOpen(true)
      }else {
        setSidestorebarOpen(false)
      }
    }

    const sidestorebarCloseHandler =()=>{
      setSidestorebarOpen(false)
    }

    let sidestorebar
    if(sidestorebarOpen){
      sidestorebar= <Stores close={sidestorebarCloseHandler} sidenavbar={"sidenavbar"}/>
    }

    const [sidesearchbarOpen, setSidesearchbarOpen] = useState(false)

    const opensearchHandler = ()=>{
      if(!sidesearchbarOpen){
        setSidesearchbarOpen(true)
      }else {
        setSidesearchbarOpen(false)
      }
    }

    const sidesearchbarCloseHandler =()=>{
      setSidesearchbarOpen(false)
    }

    let sidesearchbar
    if(sidesearchbarOpen){
      sidesearchbar= <Search close={sidesearchbarCloseHandler} sidenavbar={"sidenavbar"}/>
    }



    useEffect(()=>{
      getNumbers();
    },[])




  return (
    <Fragment>
    {topbar}
    {sidenavbar}
    {sidereadbar}
    {sidestorebar}
    {sidesearchbar}
    <Top/>
     <Navbar collapseOnSelect expand="lg"  variant="light">
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
           <Nav.Link to='/shop' className='navlink' onClick={opennavHandler}>Shop</Nav.Link>
           <Nav.Link to='/read' className='navlink'  onClick={openreadHandler}>Read</Nav.Link>
           <Nav.Link to='/stores' className='navlink' onClick={openstoreHandler}>Stores</Nav.Link>
           <Nav.Link to='/search' className='navlink' onClick={opensearchHandler}>Search</Nav.Link>
         </Nav>
         <Nav>
           <Nav.Link href="#deets" className='navlink' variant="primary" onClick={() => setModalShow(true)}>Login</Nav.Link>
           <MyVerticallyCenteredModal
             show={modalShow}
             onHide={() => setModalShow(false)}
           />
           <Nav.Link eventKey={2} href="#memes" onClick={openTopHandler}>
             <ion-icon name="cart-outline"></ion-icon><span>{props.basketProps.basketNumbers}</span>
           </Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Navbar>

    </Fragment>
  );
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbars);
