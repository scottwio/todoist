import {Todo} from '@models/todo';
import {ReduxState} from '@store/store';
import {TodoCollectionState} from '@store/todoCollection/model';
import {useSelector} from 'react-redux';
import {uuid} from '@root/utils/uuid';

export enum TodoCollectionActionTypes {
  add = 'todoCollection/add',
  done = 'todoCollection/done',
}

type AddTodoAction = {
  type: TodoCollectionActionTypes.add;
  payload: Todo;
};

type ToggleTodoDoneAction = {
  type: TodoCollectionActionTypes.done;
  payload: string;
};

export type TodoCollectionActions = AddTodoAction | ToggleTodoDoneAction;

export const addTodoItemActionCreator = (title: string): AddTodoAction => ({
  type: TodoCollectionActionTypes.add,
  payload: {
    id: uuid(),
    done: false,
    title,
  },
});

export const toggleDoneActionCreator = (id: string): ToggleTodoDoneAction => ({
  type: TodoCollectionActionTypes.done,
  payload: id,
});

export const useTodoCollection = () =>
  useSelector<ReduxState, TodoCollectionState>((state) => state.todoCollection);
