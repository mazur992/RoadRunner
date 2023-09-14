import styled from 'styled-components';

export const CatalogStyle = styled.div`
  padding: 150px 128px;
  text-align: center;
`;
export const LinkCatalogStyle = styled.a`
  color: #3470ff;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #0b44cd;
  }
`;
