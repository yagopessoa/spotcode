import React, { useState, useEffect } from 'react';
import { Image } from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import { Columns, Column, DivVSpaced, Title, SubTitle } from './Albums.styles';
import AlbumService from '../../services/Albums';
import Musics from '../Musics/Musics';

const Albums = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({});

  const fetchAlbum = () => {
    AlbumService.show(id).then(({ data }) => setAlbum(data));
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  const { cover_url, title, artist_name, songs } = album;

  return (
    <>
      <Columns>
        <Column>
          <Image src={cover_url} />
          <DivVSpaced>
            <Title>{title}</Title>
            <SubTitle>{artist_name}</SubTitle>
          </DivVSpaced>
        </Column>
      </Columns>
      <Musics songs={songs || []} />
    </>
  );
};

Albums.propTypes = {};

export default Albums;
