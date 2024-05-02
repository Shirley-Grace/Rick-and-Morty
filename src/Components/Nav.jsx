import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='d-flex text-center justify-content-evenly'>
            <h1 className="mt-4 fs-1 ">
                Rick and Morty </h1>
       <NavLink className='mt-4 fs-4 text-info'>Humans</NavLink>
       <NavLink className='mt-4 fs-4 text-info'>Aliens</NavLink>
       
    </div>
  )
}
