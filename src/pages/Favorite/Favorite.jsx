import React, { useState } from 'react';
import { FavoriteStyle } from './Favorite.styled';
import FavoritCard from 'components/Card/FavoritCard';
import Modal from 'components/Modal/Modal';
import BackDrop from 'components/BackDrop/BackDrop';

export default function Favorite() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [idCard, setIdCard] = useState(null);
  const hideModal = () => {
    setIsShowModal(false);
  };
  return (
    <FavoriteStyle>
      <FavoritCard setIdCard={setIdCard} setIsShowModal={setIsShowModal} />
      {isShowModal && (
        <BackDrop hideModal={hideModal}>
          <Modal hideModal={hideModal} idCard={idCard} />
        </BackDrop>
      )}
    </FavoriteStyle>
  );
}
