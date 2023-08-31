// tasksReducer.js
import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionType";

const initialState = {
  tasks: [
    { id: Math.random(), description: 'task 1', isDone: false },
    { id: Math.random(), description: 'task 2', isDone: true },
    { id: Math.random(), description: 'task 3', isDone: false }
  ]
};

const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state, tasks: [...state.tasks, payload]
      };
    case DONE_TASK:
      return {
        ...state, tasks: state.tasks.map((el) => el.id === payload ? { ...el, isDone: !el.isDone } : el)
      };
    case EDIT_TASK:
      return {
        ...state, tasks: state.tasks.map((el) => el.id === payload.id ? { ...el, description: payload.newDescription } : el)
      };
    case DELETE_TASK:
      return {
        ...state, tasks: state.tasks.filter((el) => el.id !== payload)
      };
    default:
      return state;
  }
};

export default tasksReducer;
