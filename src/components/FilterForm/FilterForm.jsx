import React from 'react';
import { FilterFormStyle } from './FilterForm.styled';
import ButtonSearch from 'components/ButtonSearch/ButtonSearch';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, number } from 'yup';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectAllAdvert } from 'store/createSlices/advert/advertSelectors';
import { nanoid } from '@reduxjs/toolkit';

export default function FilterForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log('values: ', values);
    resetForm();
  };

  const initialValues = {
    from: '',
    to: '',
    brand: '',
    price: '',
  };
  const schema = object({
    from: number().required(),
    to: number().required(),
  });
  const adverts = useSelector(selectAllAdvert);
  const uniqueKeys = new Set();
  const uniqueKeysPrice = new Set();

  adverts.map(advert => {
    uniqueKeys.add(advert.make);
    uniqueKeysPrice.add(advert.rentalPrice);
    return null;
  });
  const makes = [...uniqueKeys];
  const prices = [...uniqueKeysPrice];

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
                {prices.map(price => (
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
