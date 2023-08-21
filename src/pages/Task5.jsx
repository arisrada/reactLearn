import React from 'react';
import '../styles/task5.css';
import { Link } from 'react-router-dom';


function Task5() {
  return (
    <div className='main_con'>
        <div className='card1'>
            <img src='/assets/img1.jpg' alt='img1' className='img1'></img>
        </div>
        <div className='button'>
            <button className='btn1'>NEW FEATURE</button>
            <button className='btn2'>WORKFLOW STAGES</button>
        </div>
        <div className='logic'>
          <h1>🚀 Logic Stages</h1>
          <p>These stages allow you to control your workflows with 
              logical if/else conditions. The Logic stage checks for 
                specific tags or annotations. Based on these, it can route 
                your data to different stages..</p>
                <div className='time'>
                <h4 className='h41'>28th March 2023</h4>
                <h4 className='h42'>🕓 4 mins</h4>
                </div>
                <div className='see'><Link to={'/Task6'} className='a'>See more</Link></div>
        </div>
    </div>
  )
}

export default Task5