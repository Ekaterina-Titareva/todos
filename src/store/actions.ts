import { AddAction, DeleteAction, ToggleAction } from "../types/actions";
import { ADDED, DELETED, TOGGLE } from "../utilities/constants";

export const addTask = (task: string): AddAction => ({ type: ADDED, payload: task });
export const toggleTask = (index: number): ToggleAction => ({ type: TOGGLE, payload: index });
export const deleteTask = (index: number): DeleteAction => ({ type: DELETED, payload: index });