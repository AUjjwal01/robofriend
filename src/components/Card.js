import React from 'react';
import  './Card.css';

const Card=(props)=>{
    const {name,email,id}=props;
        return(
            <div className='block'>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />

            <div className='sty'>
                <h2>
                   { name}
                </h2>
                <p>{email} </p>
            </div>
                
            </div>
        );
    
}
export default Card; 