import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  PlayColumn,
  Play,
  MusicColumn,
  MusicRow,
  TextColumn,
  Title,
  ArtistName,
  FavoriteColumn,
  Divider,
  Stop,
} from './Music.styles';

const Music = ({ song, playing, setPlaying }) => {
  const { title, artist_name } = song;
  return (
    <>
      <Row>
        <PlayColumn>
          {playing ? (
            <Stop onClick={() => setPlaying({})} />
          ) : (
            <Play onClick={() => setPlaying(song)} />
          )}
        </PlayColumn>
        <MusicColumn>
          <MusicRow>
            <TextColumn>
              <Title>{title}</Title>
              <ArtistName>{artist_name}</ArtistName>
            </TextColumn>
            <FavoriteColumn>{/* Favorite */}</FavoriteColumn>
          </MusicRow>
          <Divider />
        </MusicColumn>
      </Row>
    </>
  );
};

Music.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string,
    artist_name: PropTypes.string,
  }),
  playing: PropTypes.bool,
  setPlaying: PropTypes.func,
};

Music.defaultProps = {
  song: {
    title: 'Title',
    artist_name: 'Artist',
  },
  playing: false,
  setPlaying: () => null,
};

export default Music;
