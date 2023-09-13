import React, { useEffect } from 'react';
import { ModalStyle } from './Modal.styled';
import ButtonRentalCar from 'components/ButtonRentalCar/ButtonRentalCar';
import { FiX, FiHeart } from 'react-icons/fi';

export default function Modal({ hideModal }) {
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
  }, []);
  return (
    <ModalStyle>
      <img className="modalImg" src={`http:/`} alt="icon-modal" />
      <div style={{ marginBottom: '8px' }}>
        <span className="modalModel">Buick</span>
        <span className="modalModel modalModelBlue">Enclave</span>
        <span className="modalModel">, 2008</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '277px',
          //   gap: '4px',
          marginBottom: '14px',
        }}
      >
        <span className="modalDescription">Kiev</span>
        <span className="modalDescription">Ukraine</span>
        <span className="modalDescription">
          Id: <span>9582</span>
        </span>
        <span className="modalDescription">
          Year: <span>2008</span>
        </span>
        <span className="modalDescription">
          Type: <span>Suv</span>
        </span>
        <span className="modalDescription">
          Fuel Consumption: <span>10.5</span>
        </span>
        <span className="modalDescription">
          Engine Size: <span>3.6L V6</span>
        </span>
      </div>
      <p className="additionalDescription">
        The Buick Enclave is a stylish and spacious SUV known for its
        comfortable ride and luxurious features.
      </p>
      <p className="modalTitle">Accessories and functionalities:</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '24px',
        }}
      >
        <span className="modalDescription">Kiev</span>
        <span className="modalDescription">Ukraine</span>
        <span className="modalDescription">Luxury Car Rentals</span>
        <span className="modalDescription">Premium</span>
        <span className="modalDescription">Suv</span>
        <span className="modalDescription">Enclave</span>
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
          Minimum age: <span className="rentalConditionalValue">25</span>
        </span>
        <span className="rentalConditional">Valid driver’s license</span>
        <span className="rentalConditional">Security deposite required </span>
        <span className="rentalConditional">
          Mileage: <span className="rentalConditionalValue">5,858</span>
        </span>
        <span className="rentalConditional">
          Price: <span className="rentalConditionalValue">40$</span>
        </span>
      </div>
      <ButtonRentalCar />
      <FiX className="modalCloseIcon" onClick={() => hideModal()} />
    </ModalStyle>
  );
}
