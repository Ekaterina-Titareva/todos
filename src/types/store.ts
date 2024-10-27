import store from "../store/store";

export interface RootState {
    tasks: { text: string; completed: boolean }[];
  }
  
  export type AppDispatch = typeof store.dispatch;