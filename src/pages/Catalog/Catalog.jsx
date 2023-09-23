import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card/Card';
import Modal from 'components/Modal/Modal';
import BackDrop from 'components/BackDrop/BackDrop';
import { CatalogStyle, LinkCatalogStyle } from './Catalog.styled';
import { resetFilterAdverts } from 'store/createSlices/advert/advert';
import {
  allAdverts,
  getAllAdverts,
  getFilterAdverts,
} from 'store/AsyncThunk/asyncThunkAdvert';
import FilterForm from 'components/FilterForm/FilterForm';
import Loader from 'components/Loader';
import { isLoading } from 'store/createSlices/advert/advertSelectors';

export default function Catalog() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isShowModal, setIsShowModal] = useState(false);
  const isLoad = useSelector(isLoading);
  const [page, setPage] = useState(1);
  const [idCard, setIdCard] = useState(null);
  const [params, setParams] = useState({});
  const hideModal = () => {
    setIsShowModal(false);
  };
  useEffect(() => {
    dispatch(resetFilterAdverts());
  }, [location, dispatch]);
  useEffect(() => {
    dispatch(allAdverts());
  }, [dispatch]);
  useEffect(() => {
    if (Object.keys(params).length === 0) dispatch(getAllAdverts(page));
    else dispatch(getFilterAdverts({ page, params }));
  }, [dispatch, page, params]);

  return (
    <div style={{ width: '1400px' }}>
      <CatalogStyle>
        <FilterForm setParams={setParams} setPage={setPage} />
        <Card
          setIsShowModal={setIsShowModal}
          setIdCard={setIdCard}
          idCard={idCard}
          page={page}
        ></Card>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader loading={isLoad} />
        </div>
        <LinkCatalogStyle
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </LinkCatalogStyle>
        {isShowModal && (
          <BackDrop hideModal={hideModal}>
            <Modal hideModal={hideModal} idCard={idCard} />
          </BackDrop>
        )}
      </CatalogStyle>
    </div>
  );
}
