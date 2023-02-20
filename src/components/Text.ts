import styled from "styled-components/native";

const SText= styled.Text<{size?: number}>`
  color: ${({theme}) => theme.colors.TEXT};
  font-size: ${({ size }) => size || 25}px;

  border-radius: 15px;
  text-align: center;
`
export default SText;
