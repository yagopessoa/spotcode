import React from 'react';
import PropTypes from 'prop-types';
import { Section, Container } from 'react-bulma-components';

const SectionWrapper = ({ children }) => {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node,
};

SectionWrapper.defaultProps = {
  children: <div />,
};

export default SectionWrapper;
