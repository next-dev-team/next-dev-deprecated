import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import loading from '@rematch/loading';
// import updated from '@rematch/updated';
// import storage from 'redux-persist/lib/storage';
import { models, RootModel } from './model';
import { FullModel } from './type';

// const persistConfig: PersistConfig<any> = {
// 	key: 'root',
// 	storage,
// 	whitelist: [],
// };

export const _store = init<RootModel, FullModel>({
  models,
  plugins: [
    // updated(),
    loading(),
    immerPlugin({
      whitelist: [''],
    }),
    // persistPlugin(persistConfig),
  ],
});
