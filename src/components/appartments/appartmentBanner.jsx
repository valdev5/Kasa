import React from 'react'
import "../appartments/appartmentBanner.scss"

function AppartmentBanner(props) {
  return (
    <div className='banner__img'>
    <img src={props.imageUrl} alt ="background appartement Page" />
</div>
  )
}

export default AppartmentBanner
