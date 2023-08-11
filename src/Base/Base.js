import React from 'react';
import NavBar from '../bars/navbar.js'
import SideBar from '../bars/sidebar';



export default function Base({title,styles,children}){
  return (
    <>
    <>
   <SideBar/>
   </>
   <div className='main-body'>
      <NavBar/>
      <div className={styles}>{title}</div>
      <div className='children'>{children}</div>
   </div>
  </>
  )
}
