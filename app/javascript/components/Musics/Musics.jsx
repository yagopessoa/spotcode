import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Columns, Column, PlaySequenceButton } from './Musics.styles';
import Music from './Music';

const Musics = ({ songs }) => {
  const [currentSongs, setCurrentSongs] = useState([]);
  const [playing, setPlaying] = useState({});

  useEffect(() => {
    setCurrentSongs(
      songs.map((song) => (
        <Music
          song={song}
          playing={playing.id === song.id}
          setPlaying={setPlaying}
          key={song.id}
        />
      ))
    );
  }, [songs, playing]);

  return (
    <>
      <Columns>
        <Column>
          <PlaySequenceButton>Tocar aleatoriamente</PlaySequenceButton>
        </Column>
      </Columns>
      {currentSongs}
    </>
  );
};

Musics.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      artist_name: PropTypes.string,
    })
  ),
};

Musics.defaultProps = {
  songs: [],
};

export default Musics;
