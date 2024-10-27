import { ADDED, DELETED, TOGGLE } from "../utilities/constants";

export interface AddAction {
    type: typeof ADDED;
    payload: string;
  }
  
export interface ToggleAction {
    type: typeof TOGGLE;
    payload: number;
  }
  
export interface DeleteAction {
    type: typeof DELETED;
    payload: number;
  }
  
export type ActionTypes = AddAction | ToggleAction | DeleteAction;