import styled from 'styled-components';

interface IShimmerProps {
  width: number;
  height: number;
}

export const Shimmer = styled.div<IShimmerProps>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};

  margin: 3px 0;
`;

export const Container = styled.div`
  width: 600px;
  min-height: 150px;

  display: flex;
  align-items: center;

  background: ${props => props.theme.colors.trackBackground};

  border-radius: 5px;

  margin: 5px 0;

  .wrapper {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
  }

  .icons {
    margin-left: auto;
    margin-right: 15px;
  }

  .icons div {
    margin: 10px 0;
  }

  *:not(.wrapper):not(.icons) {
    background-image: linear-gradient(
      -90deg,
      ${props => props.theme.colors.shimmer1} 0%,
      ${props => props.theme.colors.shimmer2} 50%,
      ${props => props.theme.colors.shimmer1} 100%
    );
    background-size: 400% 400%;
    animation: shimmer 1.4s linear infinite;

    @keyframes shimmer {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: -140% 0%;
      }
    }
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
