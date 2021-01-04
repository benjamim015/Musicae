import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: calc(100vh - 125px);

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
    width: 95%;
  }
`;
