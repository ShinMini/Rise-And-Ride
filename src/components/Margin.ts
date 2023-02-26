import styled  from 'styled-components/native'
import Spacing from "styles/Spacing";


const Margin = styled.View<{nav?: boolean; mt?: number; mb?: number; ml?: number; mr?: number; pt?: number; pb?: number; pl?: number; pr?: number;}>`
  margin-top: ${({nav, mt}) => (nav ? Spacing.navbar.header.height : mt || 0)}px;
  margin-bottom: ${({mb}) => mb || 0}px;
  margin-left: ${({ml}) => ml || 0}px;
  margin-right: ${({mr}) => mr || 0}px;

  padding-top: ${({pt}) => pt || 0}px;
  padding-bottom: ${({pb}) => pb || 0}px;
  padding-left: ${({pl}) => pl || 0}px;
  padding-right: ${({pr}) => pr || 0}px;
`;

export default Margin