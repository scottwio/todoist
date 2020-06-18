import {
  TodoCollectionState,
  todoCollectionInitialState,
} from '@store/todoCollection/model';
import {TodoCollectionActionTypes} from '@store/todoCollection/actions';
import {Reducer} from 'redux';
import {Actions} from '../store';

export const todoCollectionReducer: Reducer<TodoCollectionState, Actions> = (
  state: TodoCollectionState = todoCollectionInitialState,
  action: Actions,
): TodoCollectionState => {
  switch (action.type) {
    case TodoCollectionActionTypes.done:
      const todo = state.entity.filter((item) => item.id === action.payload)[0];
      if (todo) {
        todo.done = !todo.done;
      }
      return {...state, entity: [...state.entity]};
    case TodoCollectionActionTypes.add:
      return {...state, entity: [...state.entity, action.payload]};
    default:
      return state;
  }
};
