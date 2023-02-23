import {useDispatch, useSelector} from "react-redux";
import {ColorSchemeState, toggleTheme} from "stores";
import {darkTheme, lightTheme} from "styles/Theme";

const useThemes = () => {
  const isDark = useSelector((state: ColorSchemeState) => state.dark);
  const dispatch = useDispatch();
  const toggleButton = () => dispatch(toggleTheme());

  const theme = isDark ? darkTheme : lightTheme

  return {isDark, theme, toggleButton}
}

export default useThemes;
