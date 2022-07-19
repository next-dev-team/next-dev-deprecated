import { Dispatch } from './../type';
import { _useAction, _useSelector } from "../useStore";

export const _selAppStoreAppState = () => {
  const appState = _useSelector(state => state.appStore.appState);

  const actions = _useAction(dispatch => ({
    setAppState: dispatch.appStore.setAppState,
    toggleToolbox: dispatch.appStore.toggleToolbox,
  }));

  return { ...appState, ...actions }
};

