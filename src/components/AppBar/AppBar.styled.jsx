import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarStyle = styled.div``;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 5px;

  color: black;
  font-weight: 700;
  font-size: 18px;

  &.active {
    color: tomato;
  }
`;
