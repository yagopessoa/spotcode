import styled from 'styled-components';
import { Button, Columns as ColumnsRaw } from 'react-bulma-components';

export const PlaySequenceButton = styled(Button).attrs(() => ({
  className: 'is-medium',
  color: 'primary',
  outlined: true,
}))`
  margin-bottom: 24px;
`;

export const Columns = styled(ColumnsRaw).attrs(() => ({
  className: 'is-mobile is-centered',
}))``;

export const Column = styled(ColumnsRaw.Column).attrs(() => ({
  className: 'has-text-centered',
  desktop: {
    size: 12,
  },
  mobile: {
    size: 12,
  },
}))``;
