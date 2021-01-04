import React, { useCallback, useRef } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { IState } from '../../store';
import { changeCurrentSong } from '../../store/modules/currentSong/actions';
import { ICurrentSong } from '../../store/modules/currentSong/types';
import {
  loadNextTracksRequest,
  setTracksRequest,
} from '../../store/modules/tracks/actions';
import BottomTabs from '../BottomTabs';
import Input from '../Input';
import { Container, Player, TracksWrapper } from './styles';

interface ISearchData {
  search: string;
}

interface LayoutProps {
  setFavoriteTracksSearch?: React.Dispatch<React.SetStateAction<string>>;
}

const Layout: React.FC<LayoutProps> = ({
  setFavoriteTracksSearch,
  children,
}) => {
  const currentSong = useSelector<IState, ICurrentSong>(
    state => state.currentSong
  );

  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<ISearchData> = useCallback(
    async data => {
      const { search } = data;
      try {
        if (setFavoriteTracksSearch) {
          setFavoriteTracksSearch(search);
        } else if (search && !setFavoriteTracksSearch) {
          dispatch(setTracksRequest(search));
        } else {
          dispatch(loadNextTracksRequest(0));
        }
      } catch (error) {
        formRef.current?.setFieldError('search', 'erro');
      }
    },
    [dispatch, setFavoriteTracksSearch]
  );

  const closeCurrentSong = useCallback(() => {
    dispatch(
      changeCurrentSong({
        img: '',
        src: '',
      })
    );
  }, [dispatch]);

  return (
    <Container>
      {currentSong.src && (
        <Player>
          <div>
            <AiOutlineCloseSquare size={25} onClick={closeCurrentSong} />
            <img src={currentSong.img} alt="" />
          </div>
          <audio src={currentSong.src} controls autoPlay />
        </Player>
      )}

      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="search" />
        </Form>
        <TracksWrapper>{children}</TracksWrapper>
        <BottomTabs activatedTab="home" />
      </div>
    </Container>
  );
};

export default Layout;
