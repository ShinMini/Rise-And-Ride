import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.BACKGROUND};
`;
const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: ${({ theme }) => theme.color.TITLE};
`;

export { Container, MainText };