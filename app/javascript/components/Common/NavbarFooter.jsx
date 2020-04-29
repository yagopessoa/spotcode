import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaHeart } from 'react-icons/fa';
import { Container } from 'react-bulma-components';
import {
  NavbarWithBorder,
  CustomColumns,
  CustomColumn,
} from './NavbarFooter.styles';

const NavbarFooter = () => {
  return (
    <>
      <NavbarWithBorder>
        <Container>
          <CustomColumns>
            <CustomColumn>
              <Link to="/discovery" className="has-text-white">
                <FaHome size="24px" />
              </Link>
            </CustomColumn>
            <CustomColumn>
              <Link to="/search" className="has-text-white">
                <FaSearch size="24px" />
              </Link>
            </CustomColumn>
            <CustomColumn>
              <Link to="/favorites" className="has-text-white">
                <FaHeart size="24px" />
              </Link>
            </CustomColumn>
          </CustomColumns>
        </Container>
      </NavbarWithBorder>
    </>
  );
};

NavbarFooter.propTypes = {};

export default NavbarFooter;
