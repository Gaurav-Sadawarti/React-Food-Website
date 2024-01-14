import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import {burger, burger02, burger03, burger04, burger05} from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Enjoy Dish, Make your Tummy Happy.</h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={burger} price="$2.00" title="Chicken Steak Burger"/>
        </div>

        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={burger02} price="$3.00" title="Jumbo Chicken Burger"/>
          <Article imgUrl={burger03} price="$2.50" title="Crispy Chicken Burger"/>
          <Article imgUrl={burger04} price="$2.50" title="Chicken Burger"/>
          <Article imgUrl={burger05} price="$1.00" title="Veg Burger"/>
        </div>
      </div>
    </div>
  )
}

export default Blog