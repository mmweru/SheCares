import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import '../src/index.css'

const Ella = () => {
  return (
    <>
      <div className="ella-container">
        <Sidebar />
        <Main />
      </div> 
    </>
  )
}

export default Ella;
