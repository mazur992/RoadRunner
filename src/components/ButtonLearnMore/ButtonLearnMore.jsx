import React from 'react';
import { ButtonLearnMoreStyled } from './ButtonLearnMore.styled';

export default function BattonLearnMore({ setIsShowModal }) {
  return (
    <ButtonLearnMoreStyled onClick={() => setIsShowModal(true)}>
      Learn more
    </ButtonLearnMoreStyled>
  );
}
