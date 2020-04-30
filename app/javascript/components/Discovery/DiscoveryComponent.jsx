import React, { useState, useEffect } from "react";
import {
  DivVspaced,
  Heading,
  Columns,
  AlbumsColumn,
} from "./DiscoveryComponent.styles";
import AlbumComponent from "../Album/AlbumComponent";
import AlbumService from "../../services/Albums";

const DiscoveryComponent = () => {
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [recommendAlbums, setRecommendAlbums] = useState([]);

  const fetchAlbums = () => {
    AlbumService.index().then(
      ({ data: { recent_albums, recommend_albums } }) => {
        setRecentAlbums(recent_albums);
        setRecommendAlbums(recommend_albums);
      }
    );
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const renderAlbums = (albums) => {
    const albumsComponent = albums.map((albumProps) => (
      <AlbumsColumn key={albumProps.id}>
        <AlbumComponent {...albumProps} />
      </AlbumsColumn>
    ));
    return albumsComponent.length > 0 ? albumsComponent : undefined;
  };

  return (
    <>
      <div>
        <Heading>Tocadas recentemente</Heading>
        <Columns>{renderAlbums(recentAlbums)}</Columns>
      </div>
      <DivVspaced>
        <Heading>Recomendadas</Heading>
        <Columns>{renderAlbums(recommendAlbums)}</Columns>
      </DivVspaced>
    </>
  );
};

DiscoveryComponent.propTypes = {};

export default DiscoveryComponent;
