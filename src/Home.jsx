import React from 'react'
import girl2 from '../src/assets/images/girl2.png'; 
import white from '../src/assets/images/white.jpeg'; 



const Home = () => {
  return (
    <>
    <div className='overflow: hidden'>
         {/* Girl image */}
         <img style={{width: 592, 
            height: 669, 
            paddingLeft: '62%',
            boxShadow: '5px 12px 6px rgba(0, 0, 0, 0.30)'}} 
            src={girl2} 
        />      
    </div>
    </>
    
  )
}

export default Home;
