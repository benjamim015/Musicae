import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: relative;

  margin-top: 5px;

  input {
    width: 600px;
    height: 40px;

    background: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.text};

    border: 1px solid ${props => props.theme.colors.inputBorder};

    padding-left: 15px;
    padding-right: 45px;

    font-size: 20px;
    font-weight: 300;

    &:focus {
      border: 1px solid ${props => props.theme.colors.inputActivatedBorder};
    }

    @media (max-width: 650px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  svg {
    position: absolute;
    right: 15px;
  }
`;
