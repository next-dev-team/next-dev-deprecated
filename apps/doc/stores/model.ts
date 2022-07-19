import { Models } from '@rematch/core';
import { appStore } from './app';
import { InitialStoreState } from './type';

export interface RootModel extends Models<RootModel> {
  appStore: typeof appStore;
  // other store model goes here
}

export const models: RootModel = {
  appStore,
  // other model goes here
};

export const initialStoreState: InitialStoreState = {};
