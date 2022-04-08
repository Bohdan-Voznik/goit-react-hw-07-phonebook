import styled from '@emotion/styled';

export const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;

  box-shadow: 0px 4px 12px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#49af4b' : '#FE5053')};
`;

export const Img = styled.img`
  display: block;
  border-radius: 8px;
  margin-right: 15px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
`;

export const Td = styled.td`
  padding-bottom: 10px;
`;

export const Span = styled.span`
  font-weight: 700;
  color: #828282;

  padding-right: 10px;
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 22px;
`;

export const Delete = styled.button`
  padding: 0;
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #fe5053;
  border: 2px solid #8d1010;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
