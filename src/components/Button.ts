import styled from "styled-components/native";

const SButton= styled.TouchableOpacity`
  background-color: ${({theme}) => theme.color.BUTTON};
  padding: 20px 60px;

  color: ${({theme}) => theme.color.BUTTON_TEXT};
  font-size: 20px;

  border-radius: 15px;

  justify-content: center;
  align-items: center;
`
export default SButton;