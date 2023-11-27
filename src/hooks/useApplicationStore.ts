
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { ApplicationState, setScreenWidth, toggleAsideExpanded, toggleDarkMode } from '../store/slices/applicationSlice';

export const useApplicationStore = () => {
  const applicationState:ApplicationState = useSelector( (state: RootState):ApplicationState  => state.application );
  const { isAsideExpanded, isDarkMode, screenWidth } = applicationState;

  const dispatch = useAppDispatch();

  const onToggleDarkMode = () => {
    dispatch( toggleDarkMode() )
  }

  const onToggleAsideExpanded = () => {
    dispatch( toggleAsideExpanded() )
  }

  const onSetScreenWidth = (width: number) => {
    dispatch( setScreenWidth( width ) )
  }

  return {
    // properties
    isAsideExpanded,
    isDarkMode,
    screenWidth,

    // methods
    onToggleDarkMode,
    onToggleAsideExpanded,
    onSetScreenWidth
  }
};
