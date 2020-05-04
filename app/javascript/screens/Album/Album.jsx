import React from 'react';
import NavbarFooter from '../../components/Common/NavbarFooter';
import SectionWrapper from '../../components/Common/SectionWrapper';
import Albums from '../../components/Albums/Albums';

const AlbumScreen = () => {
  return (
    <>
      <SectionWrapper>
        <Albums />
      </SectionWrapper>
      <NavbarFooter />
    </>
  );
};

AlbumScreen.propTypes = {};

export default AlbumScreen;
