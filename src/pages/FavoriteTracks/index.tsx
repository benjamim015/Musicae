import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Track, { ITrack } from '../../components/Track';
import { IState } from '../../store';
import { Container } from './styles';

const FavoriteTracks: React.FC = () => {
  const favoriteTracks = useSelector<IState, ITrack[]>(
    state => state.favoriteTracks
  );

  const [favoriteTracksSearch, setFavoriteTracksSearch] = useState('');

  const handleFavoritesSearch = useCallback(
    (track: ITrack) => {
      if (
        track.title
          .toLocaleLowerCase()
          .includes(favoriteTracksSearch.toLocaleLowerCase()) ||
        track.album.title
          .toLocaleLowerCase()
          .includes(favoriteTracksSearch.toLocaleLowerCase()) ||
        track.artist.name
          .toLocaleLowerCase()
          .includes(favoriteTracksSearch.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    },
    [favoriteTracksSearch]
  );

  return (
    <Layout setFavoriteTracksSearch={setFavoriteTracksSearch}>
      <Container>
        {favoriteTracks.map(
          track =>
            handleFavoritesSearch(track) && (
              <Track key={track.id} track={track} />
            )
        )}
      </Container>
    </Layout>
  );
};

export default FavoriteTracks;
