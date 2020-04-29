import styled from 'styled-components';
import {
  Heading as HeadingRaw,
  Columns as ColumnsRaw,
} from 'react-bulma-components';

export const DivVspaced = styled.div`
  margin: 50px 0px;
`;

export const Heading = styled(HeadingRaw).attrs(() => ({
  className: 'has-text-white',
  size: 4,
}))``;

export const Columns = styled(ColumnsRaw).attrs(() => ({
  className: 'is-mobile',
}))``;

export const AlbumsColumn = styled(Columns.Column).attrs(() => ({
  desktop: { size: 3 },
  mobile: { size: 6 },
}))``;
