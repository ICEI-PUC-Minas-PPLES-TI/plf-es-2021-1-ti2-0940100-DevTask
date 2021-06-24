/* eslint-disable indent */
import styled from 'styled-components';

export const StyledButton = styled.button<{
  buttonType: string;
  variant: string;
}>`
  width: 100%;
  height: 54px;

  font-weight: 500;

  font-size: 1.1rem;

  margin-top: 4px;
  border-radius: 16px;
  border: ${(props) =>
    props.buttonType === 'outline'
      ? props.variant === 'secondary'
        ? 'solid 1px var(--purple)'
        : 'solid 1px var(--orange)'
      : 'none'};
  background-color: ${(props) =>
    props.buttonType === 'solid'
      ? props.variant === 'secondary'
        ? 'var(--purple)'
        : 'var(--orange)'
      : 'transparent'};

  color: ${(props) =>
    props.buttonType === 'solid'
      ? props.variant === 'secondary'
        ? 'var(--white)'
        : 'var(--black)'
      : props.variant === 'secondary'
      ? 'var(--purple)'
      : 'var(--orange)'};

  outline: none;

  &:focus {
    border: 1.5px solid
      ${(props) =>
        props.variant === 'secondary'
          ? 'var(--light-purple)'
          : 'var(--light-orange)'};
  }
`;
