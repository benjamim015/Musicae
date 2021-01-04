import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  flex-direction: row;

  position: relative;
`;

export const Player = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: 100%;

  div {
    position: relative;
  }

  svg {
    cursor: pointer;

    position: absolute;
    right: 0;
    top: 0;
  }

  img {
    width: 300px;
    height: 300px;
  }

  audio {
    height: 30px;

    border-radius: 0;

    background: ${props => props.theme.colors.audioBackground};

    &::-webkit-media-controls-panel {
      height: 30px;

      border-radius: 0;

      border: 0;
    }
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const TracksWrapper = styled.div`
  width: 600px;
  min-height: calc(100vh - 125px);
  max-height: calc(100vh - 125px);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.thumb};
    }
  }

  &::-webkit-scrollbar {
    width: 5px;

    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.thumb};
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
