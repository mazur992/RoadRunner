import React from 'react';
import { CardStyle } from './Card.styled';

export default function Card() {
  return (
    <CardStyle>
      <img className="cardImg" src={`http:/`} alt="icon-card" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}
      >
        <div>
          <span className="cardModel">Buick</span>
          <span className="cardModel cardModelBlue">Enclave</span>
          <span className="cardModel">, 2008</span>
        </div>
        <span className="cardModel">$40</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        <span className="cardDescription">Kiev</span>
        <span className="cardDescription">Ukraine</span>
        <span className="cardDescription">Luxury Car Rentals</span>
        <span className="cardDescription">Premium</span>
        <span className="cardDescription">Suv</span>
        <span className="cardDescription">Enclave</span>
        <span className="cardDescription">9582</span>
        <span className="cardDescription">Power liftgate</span>
      </div>
    </CardStyle>
  );
}
