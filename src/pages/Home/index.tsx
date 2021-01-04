/* eslint-disable no-return-assign */
/* eslint-disable no-else-return */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Track from '../../components/Track';
import TrackMockList from '../../components/TrackMock';
import { IState } from '../../store';
import { loadNextTracksRequest } from '../../store/modules/tracks/actions';
import { ITracks } from '../../store/modules/tracks/types';
import { Container } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const tracks = useSelector<IState, ITracks>(state => state.tracks);

  useEffect(() => {
    if (tracks.tracks.length === 0) {
      dispatch(loadNextTracksRequest(tracks.tracksIndex));
    }
  }, [dispatch, tracks.tracksIndex, tracks.tracks.length]);

  const loadNextPage = useCallback(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      if (
        e.currentTarget.scrollHeight - document.documentElement.scrollHeight ===
          e.currentTarget.scrollTop - 125 &&
        tracks.isSearchingTracks === false
      ) {
        dispatch(loadNextTracksRequest(tracks.tracksIndex + 10));
      }
    },
    [dispatch, tracks.tracksIndex, tracks.isSearchingTracks]
  );

  return (
    <Layout>
      <Container onScroll={loadNextPage}>
        {tracks.tracks.map(track => (
          <Track key={track.id} track={track} />
        ))}
        {tracks.isLoading && <TrackMockList />}
      </Container>
    </Layout>
  );
};

export default Home;
