import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {ReduxProvider, store} from '@store/store';
import {Create} from '../Create/Create';

export const navigationMock = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  setOptions: jest.fn(),
};

const RenderCreate = () =>
  render(
    <ReduxProvider>
      <Create navigation={navigationMock} />
    </ReduxProvider>,
  );

describe('Create Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add a new todo and navigate back', () => {
    const textForTodo = 'New Todo';
    const {getByTestId} = RenderCreate();
    const btn = getByTestId('create-todo-submit');
    const input = getByTestId('create-input');
    fireEvent.changeText(input, textForTodo);
    fireEvent.press(btn);
    const state = store.getState();
    const result = state.todoCollection.entity.filter(
      (todo) => todo.title === textForTodo,
    )[0];
    expect(navigationMock.goBack).toHaveBeenCalled();
    expect(result).toBeDefined();
  });

  it('should now allow empty todo text to be submitted', () => {
    const textForTodo = '';
    const {getByTestId} = RenderCreate();
    const btn = getByTestId('create-todo-submit');
    const input = getByTestId('create-input');
    fireEvent.changeText(input, textForTodo);
    fireEvent.press(btn);
    const state = store.getState();
    const result = state.todoCollection.entity.filter(
      (todo) => todo.title === textForTodo,
    )[0];
    expect(navigationMock.goBack).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});
