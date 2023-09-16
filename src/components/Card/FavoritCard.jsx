import React from 'react';
import { CardStyle } from './Card.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertsActive } from 'store/createSlices/advert/advertSelectors';
import ButtonLearnMore from 'components/ButtonLearnMore/ButtonLearnMore';
import Icon from 'images/sprite.svg';
import { deleteAdvertsActive } from 'store/createSlices/advert/advert';

export default function FavoritCard({ setIsShowModal, setIdCard, idCard }) {
  const advertsActive = useSelector(selectAdvertsActive);

  return advertsActive.length ? (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '29px',
        marginBottom: '100px',
      }}
    >
      {advertsActive.map(advert => {
        const address = advert.address.split(',');
        return (
          <OneCard
            key={advert.id}
            setIsShowModal={setIsShowModal}
            advert={advert}
            setIdCard={setIdCard}
            address={address}
          />
        );
      })}
    </div>
  ) : (
    <div style={{ color: 'tomato', textAlign: 'center', fontSize: '45px' }}>
      Add favorite car
    </div>
  );
}

function OneCard({ advert, address, setIsShowModal, setIdCard }) {
  const dispatch = useDispatch();

  const handleIconSwap = () => {
    dispatch(deleteAdvertsActive(advert));
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
    </CardStyle>
  );
}
