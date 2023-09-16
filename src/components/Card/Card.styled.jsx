import styled from 'styled-components';

export const CardStyle = styled.div`
  width: calc((100% - 87px) / 4);

  & .cardImg {
    min-height: 268px;
    margin-bottom: 14px;
    background-color: #eee;
    border-radius: 12px;
  }
  & .cardModel {
    color: #121417;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
  & .cardModel:first-child {
    margin-right: 4px;
  }
  & .cardModelBlue {
    color: #3470ff;
  }
  & .cardDescription {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
  & .cardDescription:not(:last-child) {
    border-right: solid 0.5px;
    border-color: rgba(18, 20, 23, 0.1);

    padding-right: 4px;
  }
  & .cardDescription:not(:first-child) {
    padding-left: 4px;
  }
  & .icon {
  }
`;
