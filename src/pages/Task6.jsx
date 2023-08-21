import React from 'react';
import '../styles/task6.css';
import Box from './Box';

function Task6() {
  return (
    <div className='con1'>
        <div className='flex justify-between py-5 pl-36'>
            <ul className='flex'>
                <li className='text-4xl font-[nav]'>IMAJI</li>
                <li className='text-3xl text-[brown] my-1 font-[nav]'>Coffee</li>
            </ul>
            <ul className='flex mx-10'>
                <li className='my-3 text-lg font-[nav]'>Home</li>
                <li className='my-3 text-lg font-[nav]'>Story</li>
                <li className='my-3 text-lg font-[nav]'>Menu</li>
                <li className='my-3 text-lg font-[nav]'>Space</li>
                <li className='my-3 text-lg font-[nav]'>Community</li>
                <li className='my-3 text-lg font-[nav]'>News</li>
                <li className='bg-[brown] px-5 py-4 w-32 font-[nav] text-white text-center'>Order</li>
                <li className='px-5 py-4 w-32 text-[brown] font-[nav] text-center border-red-800 border-2'>Sign In</li>
            </ul>
        </div>
        <div className='w-12/12'>
            <div className='bg-red-100 w-12/12 flex justify-center w-12/12'>
                <div className='py-6'>
                <h1 className='w-12/12 text-center text-6xl'>Our News</h1>
                <p className='w-12/12 text-center my-5 text-2xl'>Get the latest updates and deeper coffee experience from IMAJI Coffee</p>
                <img className='w-11/12 mx-16 my-5' alt='img2' src='/assets/img2.png'/>
                <h1 className='w-12/12 mx-16 my-5 text-4xl '>Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</h1>
                <h1 className='w-12/12 mx-16 my-5 text-lg text-slate-400'>4 Min <span className='text-red-100'>.....</span> August 19, 2022</h1>
                </div>       
            </div>
            <div className='my-20 text-center'>
                <Box/>
                <botton className='px-5 py-4 w-32 text-[brown] font-[nav] text-center border-red-800 border-2'>Load More</botton>
            </div>
        </div>
        <div className='bg-black w-12/12'>
        <div className='py-6'>
                <h1 className='w-12/12 text-center text-6xl text-white'>Our Location</h1>
                <p className='w-12/12 text-center my-5 text-2xl text-white'>JI. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124</p>
                <p className='w-12/12 text-center my-5 text-2xl text-white'>Customer Service +6282-2876-6862</p>
                <p className='w-12/12 text-center my-5 text-2xl text-white'>We Are Open from Sun - Mon 10 AM - 22 PM</p>
        </div>
        <div className='flex py-5 pl-36 w-12/12 justify-between pr-36'>
            <div className='flex left'>
            <img className='w-10' alt='icon1' src='/assets/icon1.png'/>
            <img className='w-10' alt='icon2' src='/assets/icon2.png'/>
            <img className='w-10' alt='icon3' src='/assets/icon3.png'/>
            <img className='w-10' alt='icon4' src='/assets/icon4.png'/>
            <img className='w-10' alt='icon5' src='/assets/icon5.png'/>
            <img className='w-10' alt='icon6' src='/assets/icon6.png'/>
            </div>
            <div className='flex'>
                <h1 className='text-white text-2xl mt-1'>Delivery Order</h1>
                <img className='w-40' alt='app' src='/assets/app.png'/>
                <img className='w-40' alt='google' src='/assets/google.png'/>
            </div>
        </div>
        <hr className='text-white m-10'></hr>
        <div className='flex justify-between px-20 pb-10'>
            <h1 className='text-[brown] text-2xl'>© 2023 IMAJI COFFEE, All rights reserved</h1>
            <h1 className='text-[brown] text-2xl'>Terms and Condition | Privacy Policy</h1>
        </div>
        </div>
    </div>
  )
}

export default Task6