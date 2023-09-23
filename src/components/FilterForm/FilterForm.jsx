import React from 'react';
import { FilterFormStyle } from './FilterForm.styled';
import ButtonSearch from 'components/ButtonSearch/ButtonSearch';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, number } from 'yup';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectAllAdvert } from 'store/createSlices/advert/advertSelectors';
import { nanoid } from '@reduxjs/toolkit';

export default function FilterForm({ setParams, setPage }) {
  const handleSubmit = (values, { resetForm }) => {
    setPage(1);
    if (!values.brand) values.brand = `${makes[0]}`;
    if (!values.price) values.price = `${prices[0]}`;
    setParams(values);
    console.log('values: ', values);
    resetForm();
  };

  const adverts = useSelector(selectAllAdvert);
  const uniqueKeys = new Set();
  const uniqueKeysPrice = new Set();

  adverts.map(advert => {
    uniqueKeys.add(advert.make);
    uniqueKeysPrice.add(parseInt(advert.rentalPrice.slice(1)));
    return null;
  });
  const makes = [...uniqueKeys];
  const prices = [...uniqueKeysPrice];
  const highestPrice = bigger(prices);
  const newPrices = step(highestPrice);
  const initialValues = {
    from: '',
    to: '',
    brand: '',
    price: '',
  };
  const schema = object({
    from: number(),
    to: number(),
  });

  return (
    <FilterFormStyle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="formLabel" htmlFor="brand">
                Car brand
              </label>
              <Field className="formField" as="select" id="brand" name="brand">
                {makes.map(make => {
                  return (
                    <option key={nanoid()} value={make}>
                      {make}
                    </option>
                  );
                })}
              </Field>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="formLabel" htmlFor="price">
                Price/ 1 hour
              </label>
              <Field className="formField" as="select" id="price" name="price">
                {newPrices.map(price => (
                  <option key={nanoid()} value={price}>
                    {price}
                  </option>
                ))}
              </Field>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="formLabel" htmlFor="login">
                Car mileage / km:
              </label>
              <div>
                <Field
                  className="formField fromField"
                  type="from"
                  name="from"
                  placeholder="From"
                />
                <Field
                  className="formField toField"
                  type="to"
                  name="to"
                  placeholder="To"
                ></Field>
              </div>
            </div>
            <ButtonSearch type="submit" />
          </div>
          <ErrorMessage name="to" component="div"></ErrorMessage>
          <ErrorMessage name="from" component="div"></ErrorMessage>
        </Form>
      </Formik>
    </FilterFormStyle>
  );
}
function bigger(values) {
  let bigNumber = values[0];
  for (let i = 1; i < values.length; i += 1) {
    if (values[i] > bigNumber) {
      bigNumber = values[i];
    }
  }

  return bigNumber;
}
function step(value) {
  const arr = [];
  if (value >= 10) {
    arr.push(10);
    let k = 20;
    while (k <= value) {
      arr.push(k);

      k += 10;
    }
    if (arr[arr.length - 1] !== value) arr.push(Math.ceil(value / 10) * 10);
  }
  return arr;
}
