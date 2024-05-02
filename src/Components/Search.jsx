import React from 'react'

export const Search = ({ setSearch,  setPageNum}) => {
  return (
    <div className='d-flex justify-content-center '>
    
       <input 
       onChange={e=>{
        setPageNum(1);
        setSearch(e.target.value);
       }}
       type="text" 
       placeholder="Find Character"
       className='mt-4 border border-info rounded-4 w-50'/>
       
       
       <button
       onClick={e=>{
        e.preventDefault();
       }}
       className=' btn btn-info w-5 mt-4 border border-0 rounded-pill'>Search</button>
    </div>
  )
}
