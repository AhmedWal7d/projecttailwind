

import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Offline, Online } from 'react-detect-offline'

import offlineimg from "../../Img/offline.jpg"

export default function Layout() {
  return <>

    <Navbar />

    <Outlet />
    <Footer />

    <>
     


      {/* <Offline> Offline the App    
      
      
      <div className='netWork'>
        <img  src={offlineimg}/>
      </div>
      </Offline> */}
    </>

  </>
}
