import React, { useState } from 'react';
import { CardStyle } from './Card.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdvert,
  selectAdvertsActive,
} from 'store/createSlices/advert/advertSelectors';
import ButtonLearnMore from 'components/ButtonLearnMore/ButtonLearnMore';
import Icon from 'images/sprite.svg';
import {
  deleteAdvertsActive,
  setAdvertsActive,
} from 'store/createSlices/advert/advert';

export default function Card({ setIsShowModal, setIdCard, idCard }) {
  const adverts = useSelector(selectAdvert);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '29px',
        marginBottom: '100px',
      }}
    >
      {adverts.map(advert => {
        const address = advert.address.split(',');
        return (
          <OneCard
            key={advert.id}
            setIsShowModal={setIsShowModal}
            setIdCard={setIdCard}
            advert={advert}
            address={address}
          />
        );
      })}
    </div>
  );
}

function OneCard({ advert, address, setIsShowModal, setIdCard }) {
  const advertsActive = useSelector(selectAdvertsActive);
  const advertAct = advertsActive.find(item => item.id === advert.id);
  const [isSwapped, setIsSwapped] = useState(advertAct ? true : false);

  const dispatch = useDispatch();

  const handleIconSwap = () => {
    if (!advertAct) {
      dispatch(setAdvertsActive(advert));
    } else {
      dispatch(deleteAdvertsActive(advert));
    }
    setIsSwapped(!isSwapped);
  };
  return (
    <CardStyle key={advert.id} style={{ position: 'relative' }}>
      <img className="cardImg" src={advert.img} alt={advert.make} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}
      >
        <div>
          <span className="cardModel">{advert.make}</span>
          <span className="cardModel cardModelBlue">{advert.model}</span>
          <span className="cardModel">{`, ${advert.year}`}</span>
        </div>
        <span className="cardModel">{advert.rentalPrice}</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px',
          marginBottom: '28px',
          overflow: 'hidden',
          height: '40px',
        }}
      >
        <span className="cardDescription">{address[1]}</span>
        <span className="cardDescription">{address[2]}</span>
        <span className="cardDescription">{advert.rentalCompany}</span>
        <span className="cardDescription">{advert.type}</span>
        <span className="cardDescription">{advert.model}</span>
        <span className="cardDescription">{advert.mileage}</span>
        <span className="cardDescription">{advert.functionalities[0]}</span>
      </div>
      <ButtonLearnMore
        setIsShowModal={setIsShowModal}
        setIdCard={setIdCard}
        id={advert.id}
      />

      {isSwapped || advertAct ? (
        <svg
          onClick={handleIconSwap}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '18px',
            height: '18px',
            cursor: 'pointer',
          }}
        >
          <use href={`${Icon}#icon-active`}></use>
        </svg>
      ) : (
        <svg
          onClick={handleIconSwap}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '18px',
            height: '18px',
            cursor: 'pointer',
          }}
        >
          <use href={`${Icon}#icon-normal`}></use>
        </svg>
      )}
    </CardStyle>
  );
}
