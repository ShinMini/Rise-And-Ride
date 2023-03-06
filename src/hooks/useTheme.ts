import {useDispatch, useSelector} from "react-redux";
import {ColorSchemeState, toggleTheme} from "src/stores/colorScheme";
import { RootState } from "src/stores/slice";
import {darkTheme, lightTheme} from "styles/Theme";

const useThemes = () => {
  const state = useSelector((state: RootState) => state.colorScheme);

  const dispatch = useDispatch();
  const toggleButton = () => dispatch(toggleTheme());


  return {isDark: state.dark, theme: state.theme, toggleButton}
}

export default useThemes;
