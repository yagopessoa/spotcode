import React from 'react';
import {
  DivVspaced,
  Heading,
  Columns,
  AlbumsColumn,
} from './DiscoveryComponent.styles';
import { albumsMock } from './utils';
import AlbumComponent from '../Album/AlbumComponent';

const DiscoveryComponent = () => {
  const renderAlbums = albumsMock.map((albumProps) => (
    <AlbumsColumn key={albumProps.id}>
      <AlbumComponent {...albumProps} />
    </AlbumsColumn>
  ));

  return (
    <>
      <div>
        <Heading>Tocadas recentemente</Heading>
        <Columns>{renderAlbums}</Columns>
      </div>
      <DivVspaced>
        <Heading>Recomendadas</Heading>
        <Columns>{renderAlbums}</Columns>
      </DivVspaced>
    </>
  );
};

DiscoveryComponent.propTypes = {};

export default DiscoveryComponent;
