// Action.js
import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionType";

export const doneTask = id => ({
  type: DONE_TASK,
  payload: id
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id
});

export const addTask = newTask => ({
  type: ADD_TASK,
  payload: newTask
});

export const editTask = (id, newDescription) => ({
  type: EDIT_TASK,
  payload: { id, newDescription }
});

 