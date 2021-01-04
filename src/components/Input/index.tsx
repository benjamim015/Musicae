/* eslint-disable no-return-assign */
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder="Pesquisar"
        onChange={e =>
          e.target.value[0] === ' ' ? (e.target.value = '') : e.target.value
        }
        {...rest}
      />
      <AiOutlineSearch size={25} />
    </Container>
  );
};

export default Input;
