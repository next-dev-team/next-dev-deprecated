import { _axios } from '@/helper/request';
import type { RootModel } from '../model';
import { _createModel } from '../useStore';
import { AppStore } from './type';

const initState = {
  appState: {
    toolboxContent: {
      content: '',
      title: "",
    }
  },
} as AppStore;

// const { appState: initAppState } = initState

export const appStore = _createModel<RootModel>()({
  state: { ...initState },
  reducers: {
    setAppState: (state, payload: AppStore['appState']) => {
      return { ...state, appState: { ...state.appState, ...payload } };
    },
    toggleToolbox: (state) => {
      return { ...state, appState: { ...state.appState, toolBox: !state.appState.toolBox } };
    }

  },
  // effects: dispatch => ({
  //   async fetchBlog() {
  //     const res = await _axios<{ data: BlogDataApi }>('/blog', { isDebug: true });
  //     dispatch.blog.setBlog(res?.data?.data);
  //     return res?.data;
  //   },
  // }),
});
