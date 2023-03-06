import styled from "styled-components/native";

const _Button= styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.BUTTON};
  padding: 20px 60px;

  color: ${({theme}) => theme.colors.BUTTON_TEXT};
  font-size: 20px;

  border-radius: 15px;

  justify-content: center;
  align-items: center;
`

export default _Button;