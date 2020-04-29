import styled from 'styled-components';
import { Navbar, Columns } from 'react-bulma-components';

export const NavbarWithBorder = styled(Navbar).attrs(() => ({
  fixed: 'bottom',
  color: 'dark',
}))`
  border-top-color: white !important;
  border-top-style: solid;
  border-top-width: 1px;
`;

export const CustomColumns = styled(Columns).attrs(() => ({
  className: 'is-mobile is-centered',
}))`
  width: 100%;
  margin: 0px !important;
`;

export const CustomColumn = styled(Columns.Column).attrs(() => ({
  className: 'has-text-centered',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-top: 12px;
`;
