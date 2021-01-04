import React, { useCallback, useState } from 'react';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlayCircle,
  AiOutlineLink,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../store';
import { changeCurrentSong } from '../../store/modules/currentSong/actions';
import {
  addTrackToFavoriteTracks,
  removeTrackFromFavoriteTracks,
} from '../../store/modules/favoriteTracks/actions';
import Tooltip from '../Tooltip';
import { Container, TextsWrapper, IconsWrapper } from './styles';

export interface ITrack {
  id?: number;
  title: string;
  duration: number;
  preview: string;
  link: string;
  artist: {
    name: string;
  };
  album: {
    title: string;
    cover_big: string;
  };
  isFavorite: boolean;
}

interface ITrackProps {
  track: ITrack;
}

const Track: React.FC<ITrackProps> = ({ track }) => {
  const favoriteTracks = useSelector<IState, ITrack[]>(
    state => state.favoriteTracks
  );

  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(() => {
    const findTrack = favoriteTracks.find(favorite => favorite.id === track.id);
    if (findTrack) {
      return true;
    }
    return false;
  });

  const formatDuration = useCallback((time: number) => {
    return `${(time / 60).toFixed(0)}:${
      time % 60 > 9 ? time % 60 : `0${time % 60}`
    }`;
  }, []);

  const handleAddToFavorites = useCallback(() => {
    dispatch(addTrackToFavoriteTracks(track));
    setIsFavorite(true);
  }, [dispatch, track]);

  const handleRemoveFromFavorites = useCallback(() => {
    dispatch(removeTrackFromFavoriteTracks(track));
    setIsFavorite(false);
  }, [dispatch, track]);

  const handleChangeCurrentSong = useCallback(() => {
    dispatch(
      changeCurrentSong({
        src: track.preview,
        img: track.album.cover_big,
      })
    );
  }, [dispatch, track]);

  return (
    <Container>
      <img src={track.album.cover_big} alt={track.album.title} />
      <TextsWrapper>
        <h1>{track.title}</h1>
        <span>Artista: {track.artist.name}</span>
        <span>Duração: {formatDuration(track.duration)}</span>
        <span>Album: {track.album.title}</span>
      </TextsWrapper>
      <IconsWrapper>
        {isFavorite ? (
          <Tooltip
            onClick={handleRemoveFromFavorites}
            Icon={AiFillHeart}
            text="Remover dos favoritos"
          />
        ) : (
          <Tooltip
            onClick={handleAddToFavorites}
            Icon={AiOutlineHeart}
            text="Adicionar aos favoritos"
          />
        )}
        <Tooltip
          onClick={handleChangeCurrentSong}
          Icon={AiOutlinePlayCircle}
          text="Escutar prévia"
        />
        <a href={track.link} rel="noreferrer" target="_blank">
          <Tooltip Icon={AiOutlineLink} text="Ver no Deezer" />
        </a>
      </IconsWrapper>
    </Container>
  );
};

export default Track;
