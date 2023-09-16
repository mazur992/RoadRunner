import styled from 'styled-components';

export const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  padding: 40px;
  border-radius: 24px;
  text-align: left;

  background: #fff;
  max-height: calc(100vh - 85px);
  overflow-y: scroll;

  & .modalImg {
    min-height: 268px;
    margin-bottom: 14px;

    border-radius: 12px;
  }
  & .modalModel {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
  & .modalModel:first-child {
    margin-right: 4px;
  }
  & .modalModelBlue {
    color: #3470ff;
  }
  & .modalDescription {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
  & .modalDescription:not(:last-child) {
    border-right: 0.5px solid #121417;
    border-color: rgba(18, 20, 23, 0.1);

    padding-right: 4px;
  }
  & .modalDescription:not(:first-child) {
    padding-left: 4px;
  }
  & .additionalDescription {
    margin-bottom: 24px;

    color: #121417;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  & .modalTitle {
    margin-bottom: 8px;

    color: #121417;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
  & .rentalConditional {
    padding: 7px 14px;

    color: #363535;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
  & .rentalConditionalValue {
    color: #3470ff;
    font-weight: 600;
  }
  & .modalCloseIcon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
