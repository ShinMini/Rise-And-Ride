import {MotiAnimationProp, MotiFromProp, MotiTransitionProp} from "moti";
import {ViewStyle} from "react-native";

const getAnimationProps = (display: boolean, animate: boolean, animationDirection: 'up' | 'down' = 'down') => {
  const transition: MotiTransitionProp = animate ? {type: 'timing', duration: 300} : {type: 'timing', duration: 0}

  if (animationDirection === 'up') {
    const from: MotiFromProp<ViewStyle>  = display ? {translateY: -100, opacity: 0.5} : {translateY: 0, opacity: 1}
    const to: MotiAnimationProp<ViewStyle> = display ? {translateY: 0, opacity: 1} : {translateY: -100, opacity: 0.2}
    return {from, to, transition}
  }
  else {
    const from: MotiFromProp<ViewStyle> = display ? {translateY: 100, opacity: 0.5} : {translateY: 0, opacity: 1}
    const to: MotiAnimationProp<ViewStyle>  = display ? {translateY: 0, opacity: 1} : {translateY: 100, opacity: 0.2}
    return {from, to, transition}
  }
}

export default getAnimationProps;
