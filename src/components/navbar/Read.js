import React, {useState} from "react";
import {Link} from 'react-router-dom';
const Read = (props) => {

 const [sidereadbarClass, setSidereadbarClass] = useState(props.sidenavbar)

 const closereadHandler =(e)=>{
   e.preventDefault()
   setSidereadbarClass("sidenavbar close")
   setTimeout(()=>{
     props.close()
   }, 1000)
 }


    return(
        <div className={sidereadbarClass }>
            <button id="close" onClick={closereadHandler} className='movecross'><ion-icon name="close-outline"></ion-icon></button>
            <div className="topnavs">
              <Link  to='/shop'>Shop</Link>
              <Link to='/read' className='active'>Read</Link>
              <Link to= '/stores'>Stores</Link>
              <Link to='/search'>Search</Link>
           </div>
            <div className='aseb'><h3>Aesop</h3></div>
            <h4>About</h4>
            <h4>Philosophy</h4>
            <h4>The Ledger</h4>
            <h4>The Fabulist</h4>
            <h4>Taxonomy of Design</h4>
        </div>
    )
}

export default Read
