import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Columns, Column, PlaySequenceButton } from './Musics.styles';
import Music from './Music';

const Musics = ({ songs }) => {
  const [currentSongs, setCurrentSongs] = useState([]);
  const [playing, setPlaying] = useState({});
  const [playRandom, setPlayRandom] = useState(false);
  const audioRef = useRef();

  const { id, file_url } = playing;

  useEffect(() => {
    const { current } = audioRef;
    if (current) {
      current.pause();
      current.load();
      if (id) {
        current.play();
      }
    }
  }, [playing]);

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

  const nextSong = () => {
    if (playRandom) {
      const index = Math.floor(Math.random() * songs.length);
      setPlaying(songs[index]);
    } else {
      setPlaying({});
    }
  };

  useEffect(() => {
    if (playRandom) {
      nextSong();
    }
  }, [playRandom]);

  const switchRandom = () => {
    if (playRandom) {
      setPlayRandom(false);
      setPlaying({});
    } else {
      setPlayRandom(true);
    }
  };

  return (
    <>
      <Columns>
        <Column>
          <PlaySequenceButton onClick={switchRandom}>
            {playRandom ? 'Parar de tocar' : 'Tocar aleatoriamente'}
          </PlaySequenceButton>
          <audio
            controls
            ref={audioRef}
            onEnded={nextSong}
            className="is-hidden"
          >
            <source src={file_url} />
          </audio>
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
