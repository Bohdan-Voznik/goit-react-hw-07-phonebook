import styled from '@emotion/styled';

export const Input = styled.input`
  display: block;
  width: 390px;
  height: 44px;
  padding: 0 30px 0 30px;
  margin-bottom: 25px;

  box-shadow: 0px 4px 12px 6px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 22px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  &:focus {
    outline: 2px solid #828282;
  }

  &::placeholder {
    color: #3a3a3a;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
