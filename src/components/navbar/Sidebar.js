import React, {useState} from "react";
import {Col, Button, Form } from 'react-bootstrap';
const Sidebar = (props) => {

 const [sidebarClass, setSidebarClass] = useState(props.sidebar)

 const closeHandler =(e)=>{
   e.preventDefault()
   setSidebarClass("sidebar close")
   setTimeout(()=>{
     props.close()
   }, 1000)
 }
    return(
        <div className={sidebarClass }>
            <button id="close" onClick={closeHandler} className='movecross'><ion-icon name="close-outline"></ion-icon></button>
            <div className='moveform'>
            <Form >
            <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>shipping fees and delivery times</Form.Label>
            <Form.Control type="email"  />
            </Form.Group>

            </Form.Row>

            <Form.Group controlId="formGridAddress1">
            <Form.Label>Morning Express (Hong Kong)</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
            <Form.Label>EMS (mainland China)</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" value="Choose...">
            <option>Choose...</option>
            <option>...</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
            </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <p>Regrettably we are unable to accept orders containing Dangerous Goods to Mainland China.</p>

            <Button variant="primary" type="submit">
            Submit
            </Button>
            </Form>
            </div>



        </div>
    )
}

export default Sidebar
