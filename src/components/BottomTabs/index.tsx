import React, { useCallback } from 'react';
import { AiOutlineHome, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { IState } from '../../store';
import { changeActivatedTab } from '../../store/modules/activatedTab/actions';
import { TabNavigator } from '../../store/modules/activatedTab/types';
import { Container } from './styles';

export interface BottomTabsProps {
  activatedTab: string;
}

const BottomTabs: React.FC<BottomTabsProps> = () => {
  const dispatch = useDispatch();
  const activatedTab = useSelector<IState, TabNavigator>(
    state => state.activatedTab
  );

  const tabColor = useCallback(
    (tabName: string) => {
      return activatedTab.tabName === tabName ? 'activated' : '';
    },
    [activatedTab]
  );

  return (
    <Container>
      <Link to="/" onClick={() => dispatch(changeActivatedTab('home'))}>
        <AiOutlineHome size={25} className={tabColor('home')} />
        <span className={tabColor('home')}>Início</span>
      </Link>
      <Link
        to="/favorites"
        onClick={() => dispatch(changeActivatedTab('favorites'))}
      >
        <AiOutlineHeart size={25} className={tabColor('favorites')} />
        <span className={tabColor('favorites')}>Favoritas</span>
      </Link>
    </Container>
  );
};

export default BottomTabs;
