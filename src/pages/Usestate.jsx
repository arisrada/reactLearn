import React from 'react';
import { useState } from 'react';
import '../styles/task6.css';

function Usestate() {
    const [name, setName] = useState('Arisrada');
  return (
    <div className='task6'>
        {name}
        <button className='bg-amber-100 py-2 px-5 mx-5 rounded-lg text-slate-400' onClick={()=>setName("Srada")}>Click me</button>
        {
          name === "Arisrada" ? <p className='text-4xl my-5'>Haii</p> : <p>Hello</p>
        }
        
    </div>
  )
}

export default Usestate;