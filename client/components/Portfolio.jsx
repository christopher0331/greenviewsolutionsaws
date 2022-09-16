import * as React from 'react';
import PortfolioLarge from './PortfolioLarge.jsx';

const Portfolio = () =>  {

    if(window.innerWidth > 1106){
        return (
           <PortfolioLarge />
        )
    } 

//	if(window.innerWidth < 1106){
  //      return (
    //        <PortfolioMed />
     //   )
//    }
}

export default Portfolio;
