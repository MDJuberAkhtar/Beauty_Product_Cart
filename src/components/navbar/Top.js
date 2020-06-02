import React, {Fragment, useState} from 'react';

import Sidebar from "./Sidebar";


const Top =({children})=>{
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openHandler = ()=>{
    if(!sidebarOpen){
      setSidebarOpen(true)
    }else {
      setSidebarOpen(false)
    }
  }

  const sidebarCloseHandler =()=>{
    setSidebarOpen(false)
  }

  let sidebar
  if(sidebarOpen){
    sidebar= <Sidebar close={sidebarCloseHandler} sidebar={"sidebar"}/>
  }


  return(
    <Fragment>
    {sidebar}
    <div >
    <p className='top-color' onClick={openHandler}>Complimentary shipping applies for all online purchases to Hong Kong and Mainland China addresses.<ion-icon name="add-circle-outline" ></ion-icon></p>
    </div>
    
    </Fragment>
  )
}

export default Top;
