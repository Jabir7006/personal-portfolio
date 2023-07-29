import React from 'react';
import './portfolio.css';
import {portfolio} from '../data'
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  return (
     <section className="portfolio section">
      <h2 className="section__title" data-aos="fade-down" data-aos-duration="1000">My <span>Portfolio</span></h2>

      <div className="portfolio__container container grid" data-aos="fade-up" data-aos-duration="1000">
         {portfolio.map((item) =>{
           return <PortfolioItem key={item.id} {...item}/> 
         })}
      </div>
     </section>
  )
}

export default Portfolio