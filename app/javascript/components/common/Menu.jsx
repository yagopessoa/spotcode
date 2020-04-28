import React from 'react';
import {
  Navbar,
  Container,
  Columns,
  Button,
  Dropdown,
} from 'react-bulma-components';
import { FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { ColumnsFullWidth } from './Menu.styles';
import logoImage from '../../assets/images/logo.png';

const Menu = () => {
  const renderActionButton = () => {
    if (useLocation().pathname === '/') {
      return (
        <a href="/users/sign_in" className="is-pulled-right is-right">
          <Button outlined color="white">
            ENTRAR
          </Button>
        </a>
      );
    }
    return (
      <Dropdown
        className="is-pulled-right is-right"
        color="dark"
        label={<FaUserCircle size="2em" />}
      >
        <a href="/users/edit">
          <Dropdown.Item value="other">Editar Usuário</Dropdown.Item>
        </a>
        <a href="/users/sign_out">
          <Dropdown.Item value="other">Sair</Dropdown.Item>
        </a>
      </Dropdown>
    );
  };
  return (
    <>
      <Navbar color="dark">
        <Container>
          <ColumnsFullWidth>
            <Columns.Column desktop={{ size: 2 }} mobile={{ size: 5 }}>
              <img src={logoImage} className="image" />
            </Columns.Column>
            <Columns.Column>{renderActionButton()}</Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </Navbar>
    </>
  );
};

Menu.propTypes = {};

export default Menu;
