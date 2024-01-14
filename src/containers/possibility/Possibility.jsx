import React from 'react'
import './possibility.css'
import chef from '../../assets/assets/chef1.png'

const Possibility = () => {
  return (
    <div className='food__possibility section__padding' id='possibility'>
      <div className="food__possibility-image">
        <img src={chef} alt="possibility" />
      </div>

      <div className="food__possibility-content">
        <h4>Taste your Fav Dish from our Restaurant.</h4>
        <h1 className="gradient__text">Delicious and Mouth Watering Taste.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, nulla nec faucibus sagittis</p>
        <h4>Fusion of magic and taste</h4>
      </div>
    </div>
  )
}

export default Possibility