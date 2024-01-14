import React from 'react'
import './article.css'

const Article = ({imgUrl, price, title}) => {
  return (
    <div className='food__blog-container_article'> 
      <div className="food__blog-container_article-image">
        <img src={imgUrl} alt="blog Image" />
      </div>

      <div className="food__blog-container_article-content">
        <div>
          <p>{price}</p>
          <h3>{title}</h3>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default Article