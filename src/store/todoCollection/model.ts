import {Todo} from '@models/todo';
import {Meta} from '@store/store';
import {uuid} from '@root/utils/uuid';

export type TodoCollectionState = {
  entity: Todo[];
  meta: Meta;
};

export const todoCollectionInitialState = {
  entity: [
    {id: uuid(), title: '🐶 Take the dog for a walk', done: false},
    {id: uuid(), title: '🛍️ Do some shopping', done: true},
  ],
  meta: {},
};
