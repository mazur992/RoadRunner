import React, { useEffect } from 'react';
import { ModalStyle } from './Modal.styled';
import ButtonRentalCar from 'components/ButtonRentalCar/ButtonRentalCar';
import Icon from 'images/sprite.svg';
import { useSelector } from 'react-redux';
import {
  selectAdvert,
  selectFilterAdvert,
} from 'store/createSlices/advert/advertSelectors';
import { nanoid } from '@reduxjs/toolkit';

export default function Modal({ hideModal, idCard }) {
  const adverts = useSelector(selectAdvert);
  const filterAdverts = useSelector(selectFilterAdvert);
  console.log('filterAdverts: ', filterAdverts);
  const advert = adverts.find(item => item.id === idCard);
  const address = advert.address.split(',');
  const rentalConditions = advert.rentalConditions.split('\n');
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        hideModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hideModal]);
  return (
    <ModalStyle>
      <img className="modalImg" src={advert.img} alt={advert.make} />
      <div style={{ marginBottom: '8px' }}>
        <span className="modalModel">{advert.make}</span>
        <span className="modalModel modalModelBlue">{advert.model}</span>
        <span className="modalModel">{`, ${advert.year}`}</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '277px',
          marginBottom: '14px',
        }}
      >
        <span className="modalDescription">{address[1]}</span>
        <span className="modalDescription">{address[2]}</span>
        <span className="modalDescription">
          Id: <span>{advert.id}</span>
        </span>
        <span className="modalDescription">
          Year: <span>{advert.year}</span>
        </span>
        <span className="modalDescription">
          Type: <span>{advert.type}</span>
        </span>
        <span className="modalDescription">
          Fuel Consumption: <span>{advert.fuelConsumption}</span>
        </span>
        <span className="modalDescription">
          Engine Size: <span>{advert.engineSize}</span>
        </span>
      </div>
      <p className="additionalDescription">{advert.description}</p>
      <p className="modalTitle">Accessories and functionalities:</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '24px',
        }}
      >
        {advert.accessories.map(accessory => (
          <span key={nanoid()} className="modalDescription">
            {accessory}
          </span>
        ))}
        {advert.functionalities.map(functionalities => (
          <span key={nanoid()} className="modalDescription">
            {functionalities}
          </span>
        ))}
      </div>
      <p className="modalTitle">Rental Conditions: </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '24px',
        }}
      >
        <span className="rentalConditional">
          {`${rentalConditions[0].split(': ')[0]}: `}
          <span className="rentalConditionalValue">
            {rentalConditions[0].split(': ')[1]}
          </span>
        </span>
        {rentalConditions.slice(1).map(rentalCondition => (
          <span key={nanoid()} className="rentalConditional">
            {rentalCondition}
          </span>
        ))}

        <span className="rentalConditional">
          Mileage:{' '}
          <span className="rentalConditionalValue">{advert.mileage}</span>
        </span>
        <span className="rentalConditional">
          Price:{' '}
          <span className="rentalConditionalValue">{advert.rentalPrice}</span>
        </span>
      </div>
      <a style={{ color: '#fff', padding: '20px 50px' }} href="tel:+123456789">
        <ButtonRentalCar />
      </a>

      <svg className="modalCloseIcon" onClick={() => hideModal()}>
        <use href={`${Icon}#icon-close`}></use>
      </svg>
    </ModalStyle>
  );
}
