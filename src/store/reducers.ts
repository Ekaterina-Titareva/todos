import { ActionTypes } from '../types/actions';
import { ADDED, TOGGLE, DELETED } from '../utilities/constants';

interface State {
  tasks: { text: string; completed: boolean }[];
}

const initialState: State = {
  tasks: [],
};

const todosReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ADDED:
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, completed: false }], // Добавляем новую задачу
      };
    case TOGGLE:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, completed: !task.completed }: task // Отмечаем задачу как завершенную и наоборот
        ),
      };
    case DELETED:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload), // Удаляем задачу по индексу
      };
    default:
      return state;
  }
};

export default todosReducer;