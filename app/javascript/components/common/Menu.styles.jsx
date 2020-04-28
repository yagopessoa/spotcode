import styled from 'styled-components';
import { Columns } from 'react-bulma-components';

export const ColumnsFullWidth = styled(Columns).attrs(() => ({
  className: 'is-mobile',
}))`
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
`;
