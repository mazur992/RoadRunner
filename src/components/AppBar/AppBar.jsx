import React from 'react';
import { AppBarStyle, StyledLink } from './AppBar.styled';

export default function AppBar() {
  return (
    <AppBarStyle>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/catalog">Catalog</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </AppBarStyle>
  );
}
