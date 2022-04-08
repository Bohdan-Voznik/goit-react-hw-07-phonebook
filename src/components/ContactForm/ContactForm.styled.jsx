import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  margin: 25px 0 50px 0;

  &::after {
    content: '';
    position: absolute;
    width: 450px;
    height: 2px;
    left: 0px;
    bottom: -25px;
    background-color: #c4c4c4;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  display: block;
  width: 270px;
  height: 44px;
  padding: 0 30px 0 30px;

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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #49af4b;
  border: 3px solid #4d884e;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const ImgLabel = styled.label`
  &:not(:last-child) {
    /* margin-right: 12px; */
  }
`;

export const RadioButtonWtapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
export const RadioButton = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);

  &:checked ~ img {
    transform: rotate(15deg);
  }
`;

export const Img = styled.img`
  display: block;
  border-radius: 8px;
  transition: all 1s ease;

  &:hover {
    cursor: pointer;
    /* transform: scale(1.05); */
    transform: rotate(15deg);
  }
`;
