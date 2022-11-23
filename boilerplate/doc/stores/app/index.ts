import { _axios } from '@/helper/request';
import { createModel } from '@rematch/core';
import type { RootModel } from '../model';
import { _createModel } from '../useStore';
import { AppStore } from './type';

const initState: AppStore = {
  appState: {
    toolboxContent: {
      content: '',
      title: '',
      width: $cons.layout.xlWidth,
    },
  },
};

// const { appState: initAppState } = initState

export const appStore = createModel<RootModel>()({
  name: 'appStore',
  state: { ...initState },
  reducers: {
    setAppState: (state, payload: AppStore['appState']) => {
      return {
        ...state,
        appState: {
          ...state.appState,
          ...payload,
          toolboxContent: {
            ...state.appState.toolboxContent,
            ...payload.toolboxContent,
          },
        },
      };
    },
    toggleToolbox: (state) => {
      return {
        ...state,
        appState: { ...state.appState, toolBox: !state.appState.toolBox },
      };
    },
  },
  // effects: dispatch => ({
  //   async fetchBlog() {
  //     const res = await _axios<{ data: BlogDataApi }>('/blog', { isDebug: true });
  //     dispatch.blog.setBlog(res?.data?.data);
  //     return res?.data;
  //   },
  // }),
});
