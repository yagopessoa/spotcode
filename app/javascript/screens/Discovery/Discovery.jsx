import React from 'react';
import NavbarFooter from '../../components/Common/NavbarFooter';
import SectionWrapper from '../../components/Common/SectionWrapper';
import DiscoveryComponent from '../../components/Discovery/DiscoveryComponent';

const DiscoveryScreen = () => {
  return (
    <>
      <SectionWrapper>
        <DiscoveryComponent />
      </SectionWrapper>
      <NavbarFooter />
    </>
  );
};

DiscoveryScreen.propTypes = {};

export default DiscoveryScreen;
