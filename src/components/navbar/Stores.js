import React, {useState} from "react";
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Stores = (props) => {

 const [sidestorebarClass, setSidestorebarClass] = useState(props.sidenavbar)

 const closestoreHandler =(e)=>{
   e.preventDefault()
   setSidestorebarClass("sidenavbar close")
   setTimeout(()=>{
     props.close()
   }, 1000)
 }
    return(
        <div className={sidestorebarClass }>
            <button id="close" onClick={closestoreHandler} className='movecross'><ion-icon name="close-outline"></ion-icon></button>
            <div className="topnavs">
              <Link  to='/shop' >Shop</Link>
              <Link to='/read' >Read</Link>
              <Link to= '/stores' className='active'>Stores</Link>
              <Link to='/search'>Search</Link>
           </div>
            <div className='aseb'><h3>Aesop</h3></div>
            <Button variant="outline-secondary">see nearby stores</Button>{' '}
            <br/>
            <small> or Search by </small>
            <Form className='forms'>
             <Form.Group controlId="formBasicEmail">
             <Form.Control type="email" placeholder="City, State or Postcard" />
             </Form.Group>
            </Form>
        </div>
    )
}

export default Stores
