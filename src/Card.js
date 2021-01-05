import React from 'react';

  // eslint-disable-next-line
import PropTypes from 'prop-types';

const Card =({property})=>{
    const{index, head, description,slides,picture} = property;
    return(
        <div id={`card-${index}`} className = 'card'>
            <h1 className='head'>{head}</h1>
            <p className="description">{description}</p>
             <h1> <img src={slides} alt="slide"/></h1>
           
            <p className="picture"><img source ={picture} alt='memoji' className='emote' /></p>
        </div>
    )
}
export default Card