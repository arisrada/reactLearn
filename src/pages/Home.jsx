import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/task6.css';
const Home = () => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/About');
    }
  return (
    <div>
        <div>
            <div className='flex gap-2 p-2 float-right'>
                <button className='px-5 py-4 w-32 text-[brown] font-[nav] text-center border-red-800 border-2'>Home</button>
                <button className='px-5 py-4 w-32 text-[brown] font-[nav] text-center border-red-800 border-2' onClick={handleNavigate}>About</button>
                <button className='px-5 py-4 w-32 text-[brown] font-[nav] text-center border-red-800 border-2'>Contact</button>
                <button className='px-5 py-4 w-32 text-[brown] font-[nav] text-center border-red-800 border-2'>News</button>            
            </div>
        </div>
    </div>
  )
}

export default Home