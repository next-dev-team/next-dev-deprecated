export type AppState = {
  toolBox?: boolean;
  toolboxContent?: {
    title?: string;
    content?: string | React.ReactNode;
    width?: any;
  };
};
export type AppStateKey = keyof AppState;

export type AppStore = {
  appState: AppState;
};
