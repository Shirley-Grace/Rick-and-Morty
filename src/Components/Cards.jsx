import React from 'react';



export const Cards = ({ results }) => {
  let display;
  console.log(results)

  if (results) {
    display = results.map(cast => {
      let { id, name,image, species,origin } = cast
      return (
      <div key={id} className='rowcol-3 position-relative border border-info border-2 rounded mb-3'>
       
          <img src={image} alt="" className="img-fluid" />
          <div className="container">
            <div className="fs-4 fw-bold">{name}</div>
            <div className="fs-5 ">{species}</div>
           <div className="fs-5">Origin
           <div className="fs-6 mb-3">{origin.name}</div>
           </div>
          </div>
        
      </div>
      )
    });
  } else {
    display = "We Dont Know That Character :/"
  }
  return (
    <div className=''>{display}</div>
  )
}
export default Cards;