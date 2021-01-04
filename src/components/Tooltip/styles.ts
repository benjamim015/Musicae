import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    visibility: hidden;
    opacity: 0;

    width: 120px;
    height: 40px;

    background-color: ${props => props.theme.colors.tooltipBackground};
    color: ${props => props.theme.colors.text};

    text-align: center;

    border-radius: 6px;

    position: absolute;

    right: 130%;
    top: -20%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: opacity 0.4s;
    z-index: 1;

    font-weight: 300;

    &:after {
      content: ' ';

      position: absolute;

      top: 50%;
      left: 100%;

      margin-top: -5px;

      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent transparent
        ${props => props.theme.colors.tooltipBackground};
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
