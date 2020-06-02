import React, {useState} from "react";
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Search = (props) => {

 const [sidesearchbarClass, setSidesearchbarClass] = useState(props.sidenavbar)

 const closesearchHandler =(e)=>{
   e.preventDefault()
   setSidesearchbarClass("sidenavbar close")
   setTimeout(()=>{
     props.close()
   }, 1000)
 }
    return(
        <div className={sidesearchbarClass }>
            <button id="close" onClick={closesearchHandler} className='movecross'><ion-icon name="close-outline"></ion-icon></button>
            <div className="topnavs">
              <Link  to='/shop' >Shop</Link>
              <Link to='/read' >Read</Link>
              <Link to= '/stores' >Stores</Link>
              <Link to='/search'>Search</Link>
           </div>
            <div className='aseb'><h3>Aesop</h3></div>
            <Form className='forms'>
             <Form.Group controlId="formBasicEmail">
             <Form.Control type="email" placeholder="City, State or Postcard" />
             </Form.Group>
            </Form>
            <small> suggested </small>
            <h4>Cleanser</h4>
            <h4>Hydrators</h4>
            <h4>Parsley Seeds</h4>
        </div>
    )
}

export default Search
