import React from 'react'

const Card1 = ({image, title, date}) => {
    return (
        <div>
        <div className='m-36 flex'>
            <img className='w-2/12' alt='box' src={image}/>
            <div>
                <h1 className='w-12/12 mx-16 my-5 text-4xl text-start'>{title}</h1>
                <h1 className='w-12/12 mx-16 my-5 text-start text-lg text-slate-400'>4 Min <span className='text-white'>.....</span>{date}</h1>
            </div>
        </div>
        <hr className='text-slate-100 h-2px  m-20'></hr></div>
  )
}

export default Card1