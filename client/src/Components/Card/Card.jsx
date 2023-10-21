import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

const Card = ({item}) => {
  if (!item || !item.attributes || !item.attributes.img || !item.attributes.img2) {
    return null; // Handle the case where item or its properties are missing
  }

  const mainImageUrl = item.attributes.img.data.attributes.url;
  const secondImageUrl = item.attributes.img2.data.attributes.url;
  
  if (!mainImageUrl || !secondImageUrl) {
    return null; // Handle the case where image URLs are missing
  }
  // console.log(mainImageUrl)
  // console.log(secondImageUrl)
  return (
    <Link className="Navlink" to={`product/${item.id}`}>
      <div className='card'>
         <div className="image">
            {item?.attributes.isNew && <span>New Season</span>}
            <img src={process.env.REACT_APP_API_URL+mainImageUrl} alt="" className='mainImg'/>
            <img src={process.env.REACT_APP_API_URL+secondImageUrl} alt="" className='secondImg'/>
         </div>
         <div>
         <h2>{item?.attributes.title}</h2>
         <span className="prices">
            <h3>${item.oldPrice || item?.attributes.price+20}</h3>
            <h3>${item?.attributes.price}</h3>
         </span>
         </div>
      </div>
    </Link>
  )
}

export default Card
