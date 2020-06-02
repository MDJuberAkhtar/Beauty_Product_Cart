import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Shop = (props) => {

 const [sidenavbarClass, setSidenavbarClass] = useState(props.sidenavbar)

 const closenavHandler =(e)=>{
   e.preventDefault()
   setSidenavbarClass("sidenavbar close")
   setTimeout(()=>{
     props.close()
   }, 1000)
 }


    return(
        <div className={sidenavbarClass }>
            <button id="close" onClick={closenavHandler} className='movecross'><ion-icon name="close-outline"></ion-icon></button>
            <div className="topnavs">
              <Link  to='/shop' className='active'>Shop</Link>
              <Link to='/read' >Read</Link>
              <Link to= '/stores'>Stores</Link>
              <Link to='/search'>Search</Link>
           </div>
           <div className='aseb'><h3>Aesop</h3></div>
           <h4>Skin</h4>
           <h4>Hair</h4>
           <h4>Body & Hand</h4>
           <h4>Fragrance</h4>
           <h4>Home</h4>
           <h4>Kit & Travels</h4>
           <h4>Gifts</h4>

        </div>
    )
}

export default Shop
