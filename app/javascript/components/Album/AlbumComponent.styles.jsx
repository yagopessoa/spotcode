import styled from 'styled-components';
import { Heading as HeadingRaw } from 'react-bulma-components';

export const DivVspaced = styled.div`
  margin-top: 10px;
`;

export const Heading = styled(HeadingRaw).attrs(() => ({
  className: 'has-text-white',
  size: 6,
}))``;
