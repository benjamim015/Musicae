import React from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface TooltipProps {
  Icon: IconType;
  text: string;
  onClick?: () => void;
}

const Tooltip: React.FC<TooltipProps> = ({ Icon, text, onClick }) => {
  return (
    <Container>
      <Icon onClick={onClick} size={22} />
      <span>{text}</span>
    </Container>
  );
};

export default Tooltip;
