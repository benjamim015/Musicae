import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  max-height: 80px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: ${props => props.theme.colors.bottomTabsBackground};

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-decoration: none;

    span {
      margin-top: 6px;

      font-weight: 300;

      color: ${props => props.theme.colors.bottomTabIcon};

      &.activated {
        color: ${props => props.theme.colors.bottomTabActivatedIcon};
      }
    }

    svg {
      color: ${props => props.theme.colors.bottomTabIcon};

      &.activated {
        color: ${props => props.theme.colors.bottomTabActivatedIcon};
      }
    }
  }
`;
