import styled from '@emotion/styled';

export const Span = styled.div`
  margin: 0 auto;
  width: ${props => (props.size ? props.size : '15px')};
  height: ${props => (props.size ? props.size : '15px')};
  position: relative;
  text-align: center;
  animation: sk-rotate 2s infinite linear;

  @keyframes sk-rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;

export const DotFirst = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: ${props => (props.dotsColor ? props.dotsColor : '#fff')};
  border-radius: 100%;
  animation: sk-bounce 2s infinite ease-in-out;
`;

export const DotSecond = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: auto;
  bottom: 0;
  background-color: ${props => (props.dotsColor ? props.dotsColor : '#fff')};
  border-radius: 100%;
  animation: sk-bounce 2s infinite ease-in-out;
  animation-delay: -1s;
`;
