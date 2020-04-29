import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'react-bulma-components';
import { DivVspaced, Heading } from './AlbumComponent.styles';

const AlbumComponent = ({ id, title, artist_name, cover_url }) => {
  return (
    <Link to={`/album/${id}`}>
      <Image src={cover_url} />
      <DivVspaced>
        <Heading>{title}</Heading>
        <Heading subtitle>{artist_name}</Heading>
      </DivVspaced>
    </Link>
  );
};

AlbumComponent.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  artist_name: PropTypes.string,
  cover_url: PropTypes.string,
};

AlbumComponent.defaultProps = {
  id: null,
  title: 'Titulo',
  artist_name: 'Artista',
  cover_url: '#',
};

export default AlbumComponent;
