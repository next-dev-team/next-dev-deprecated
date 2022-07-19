import type { RematchDispatch, RematchRootState, RematchStore } from '@rematch/core';
import type { ExtraModelsFromLoading } from '@rematch/loading';
import type { ExtraModelsFromUpdated } from '@rematch/updated';
import type { models, RootModel } from './model';

export type FullModel = ExtraModelsFromLoading<RootModel> &
	ExtraModelsFromUpdated<RootModel>;
export type Store = RematchStore<RootModel, FullModel>;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export type RootStateKey = keyof typeof models;

export type RootStateRecord = Record<RootStateKey, any>;
export type InitialStoreState = Partial<Record<RootStateKey, any>>;
export type RootStateModel = RematchRootState<RootModel>;
