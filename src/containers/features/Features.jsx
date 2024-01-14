import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'

const featureData = [
  {
    title: 'Provide organic food & ensure fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    title: 'Explore Our Menu and Enjoy Foods',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
]

const Features = () => {
  return (
    <div className='food__features section__padding' id='features'>
      <div className="food__features-heading">
        <h1 className="gradient__text">
          Get Sumptuous and mouth watering Food to eat. Unveiling the Magic of Iconic Vegan.
        </h1>

        <p>Request Early Access to Get Started</p>
      </div>

      <div className="food__features-container">
        {
          featureData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features