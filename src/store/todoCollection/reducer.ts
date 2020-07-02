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
      const todosCollection = state.entity.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return item;
        }
      });
      return {...state, entity: todosCollection};
    case TodoCollectionActionTypes.add:
      return {...state, entity: [...state.entity, action.payload]};
    default:
      return state;
  }
};
