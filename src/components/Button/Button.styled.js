import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 8px 16px;
  background-color: #3f51b5;
  text-decoration: none;
  color: #fff;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #303f9f;
    box-shadow: 0 0 5px rgba(79, 169, 77, 0.7);
  }

  &:focus {
    background-color: #303f9f;
    box-shadow: 0 0 5px rgba(79, 169, 77, 0.7);
  }
`;
