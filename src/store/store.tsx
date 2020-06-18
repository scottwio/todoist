import React from 'react';
import {Todo} from '@models/todo';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {todoCollectionReducer} from '@store/todoCollection/reducer';
import {TodoCollectionActions} from '@store/todoCollection/actions';

export type Meta = {
  status?: string;
};

interface StoreItem<T> {
  entity: T;
  meta: Meta;
}

export type ReduxState = {
  todoCollection: StoreItem<Todo[]>;
};

export type Actions = TodoCollectionActions;

const reducer = combineReducers({
  todoCollection: todoCollectionReducer,
});

const loadDevTools = () => {
  const castWindow = window as any;
  if (__DEV__ && typeof window !== 'undefined') {
    return (
      castWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
      castWindow.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
};

export const store = createStore(reducer, loadDevTools());

export const ReduxProvider = (props: {children: any}) => {
  return <Provider store={store}>{props.children}</Provider>;
};
