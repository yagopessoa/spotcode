import styled from 'styled-components';
import { Heading, Columns as ColumnsRaw } from 'react-bulma-components';

export const DivVSpaced = styled.div`
  margin: 20px 0px;
`;

export const Title = styled(Heading).attrs(() => ({
  className: 'has-text-white',
  size: 5,
}))``;

export const SubTitle = styled(Heading).attrs(() => ({
  className: 'has-text-white',
  size: 6,
  subtitle: true,
}))``;

export const Columns = styled(ColumnsRaw).attrs(() => ({
  className: 'is-vcentered is-mobile is-centered',
}))``;

export const Column = styled(ColumnsRaw.Column).attrs(() => ({
  className: 'has-text-centered',
  desktop: {
    size: 3,
  },
}))``;
