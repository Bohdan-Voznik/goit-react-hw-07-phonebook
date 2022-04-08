import { Span, DotFirst, DotSecond } from './Spiner.styled';

export const Spiner = ({ size, dotsColor }) => {
  return (
    <Span size={size}>
      <DotFirst dotsColor={dotsColor} />
      <DotSecond dotsColor={dotsColor} />
    </Span>
  );
};
