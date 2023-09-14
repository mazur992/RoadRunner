import React from 'react';
import { ButtonLearnMoreStyled } from './ButtonLearnMore.styled';

export default function BattonLearnMore({ setIsShowModal, id, setIdCard }) {
  return (
    <ButtonLearnMoreStyled
      onClick={() => {
        setIsShowModal(true);
        setIdCard(id);
      }}
    >
      Learn more
    </ButtonLearnMoreStyled>
  );
}
