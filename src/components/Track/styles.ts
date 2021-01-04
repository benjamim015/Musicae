import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 590px;
  height: 100%;
  max-height: 150px;

  display: flex;
  align-items: center;

  margin: 5px 0;

  background: ${props => props.theme.colors.trackBackground};

  border-radius: 5px;

  text-overflow: ellipsis;

  img {
    height: 150px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 10px;

  max-width: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  span {
    font-weight: 300;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;

    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (max-width: 480px) {
    max-width: 190px;
  }
`;

export const IconsWrapper = styled.div`
  margin-left: auto;
  margin-right: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: ${props => props.theme.colors.text};

    text-decoration: none;
  }

  svg {
    cursor: pointer;

    margin: 3px 0;
  }
`;
