import React, { useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { getNumbers } from '../../actions/getAction';
import { addBasket, removeBasket } from '../../actions/addAction';

const Cart =(props)=>{

  const [topbarClass, setTopbarClass] = useState(props.topbar);

  const closeHandler =(e)=>{
    e.preventDefault()
    setTopbarClass("topbar close")
    setTimeout(()=>{
      props.close()
    }, 1000)
  }

  useEffect(()=>{
    getNumbers();
  },[])

  if(props.basketProps.basketNumbers === 0){
    return(
      <div className={topbarClass}>
       <button id="close" onClick={closeHandler} className='movecross'><ion-icon name="close-outline"></ion-icon></button>
       <h2 className='noitem'>You have no items in your cart </h2>
      </div>
    )
  } else {
    return(

       <div className={topbarClass}>

         <Container>
           <Row className='topmove'>
            <Col sm={6}>
              <strong>Cart</strong>
            </Col>
            <Col sm={2}><strong>Size</strong></Col>
            <Col sm={2}><strong>Quantity</strong></Col>
            <Col sm={2}><strong><button id="close" onClick={closeHandler} className='movecross'><ion-icon name="close-outline"></ion-icon></button></strong></Col>
          </Row>
           <hr className='tophr' />
          <Row className='topmove'>
           <Col sm={6}>
             <strong>Redemption Body Scrub</strong>
           </Col>
           <Col sm={2}>180ml</Col>
           <Col sm={2}><button className="qty qty-minus" onClick={props.removeBasket}>-</button><strong>{props.basketProps.basketNumbers}</strong> <button  className="qty qty-plus" onClick={props.addBasket}>+</button></Col>
            <Col sm={2}><strong>${props.basketProps.basketNumbers * 260}</strong></Col>
         </Row>
         <hr className='tophr' />
         <Row className='topmove'>
          <Col sm={6}>
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>Apply Promocode</Col>
           <Col sm={2}><strong><button  className="qty qty-plus">+</button></strong></Col>
        </Row>
        <Row className='topmove'>
         <Col sm={6}>
         </Col>
         <Col sm={2}></Col>
         <Col sm={2}>Subtotal</Col>
          <Col sm={2}><strong>${props.basketProps.basketNumbers * 260}</strong></Col>
       </Row>
       <Row className='topmove'>
        <Col sm={6}>All prices list in HKD$.
  We are pleased to offer shipping to Hong Kong S.A.R and mainland China.</Col>
        <Col sm={2}></Col>
        <Col sm={4}>
        <Button variant="light" size="lg" block>
          Checkout
        </Button>
        </Col>

      </Row>

       </Container>
       </div>

    )

  }

}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers, addBasket, removeBasket })(Cart);
