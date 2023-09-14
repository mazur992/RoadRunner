import React, { useState, useEffect } from 'react';
import Card from 'components/Card/Card';
import Modal from 'components/Modal/Modal';
import BackDrop from 'components/BackDrop/BackDrop';
import { CatalogStyle } from './Catalog.styled';
import { useDispatch } from 'react-redux';
import { getAllAdverts } from 'store/AsyncThunk/asyncThunkAdvert';

export default function Catalog() {
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [idCard, setIdCard] = useState(null);
  console.log('setPage: ', setPage);
  const hideModal = () => {
    setIsShowModal(false);
  };
  useEffect(() => {
    dispatch(getAllAdverts(page));
  }, [dispatch, page]);
  return (
    <div style={{ width: '1400px' }}>
      <CatalogStyle>
        <Card setIsShowModal={setIsShowModal} setIdCard={setIdCard}></Card>

        {isShowModal && (
          <BackDrop hideModal={hideModal}>
            <Modal hideModal={hideModal} idCard={idCard} />
          </BackDrop>
        )}
      </CatalogStyle>
    </div>
  );
}
