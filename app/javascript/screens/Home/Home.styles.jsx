import styled from 'styled-components';
import { Heading, Button } from 'react-bulma-components';

export const MainHeading = styled(Heading).attrs(() => ({
  className: 'has-text-weight-medium has-text-centered has-text-white',
  size: 1,
}))`
  margin-top: 25px;
`;

export const DescriptionList = styled.ul.attrs(() => ({
  className: 'has-text-white',
}))`
  font-size: 18px;
  margin-top: 25px;
  list-style-type: square;
`;

export const SubscribeButton = styled(Button).attrs(() => ({
  className: 'is-success is-outlined is-large has-text-white',
}))`
  margin-top: 50px;
  border-width: 2px;
`;
