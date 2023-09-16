import styled from 'styled-components';

export const FilterFormStyle = styled.div`
  margin-bottom: 50px;
  display: flex;

  justify-content: center;

  & .formLabel {
    text-align: left;
    margin-bottom: 8px;

    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }
  & .formField {
    padding: 14px 18px;
    margin-right: 18px;
    min-width: 125px;

    color: #121417;
    background-color: #f7f7fb;

    font-size: 18px;
    font-weight: 500;
    line-height: 20px; /* 111.111% */

    border-radius: 14px;

    border: none;
  }
  & .fromField {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    margin-right: 0;

    width: 160px;
    border-top-right-radius: non;
  }
  & .toField {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    width: 160px;
  }
`;
