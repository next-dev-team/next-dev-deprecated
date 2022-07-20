import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from './type';
export { createModel as _createModel } from '@rematch/core';


export const _useDispatch = () => useDispatch<Dispatch>();
export const _useSelector: TypedUseSelectorHook<RootState> = useSelector;

export function _useAction<MD>(selector: (dispatch: Dispatch) => MD) {
  const dispatch = _useDispatch();
  return selector(dispatch);
}

