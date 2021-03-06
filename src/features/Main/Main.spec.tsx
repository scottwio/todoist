import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {Main} from '../Main/Main';
import {ReduxProvider, store} from '@store/store';
import {mockNavigationProps} from '@root/test-utils/router';

const RenderMain = () =>
  render(
    <ReduxProvider>
      <Main {...mockNavigationProps} />
    </ReduxProvider>,
  );

describe('Main Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should navigate to create page', () => {
    const {getByTestId} = RenderMain();
    const btn = getByTestId('create-todo');
    fireEvent.press(btn);
    expect(mockNavigationProps.navigation.navigate).toBeCalledWith('Create');
  });

  it('should display list of todo items', async () => {
    const {findAllByTestId} = RenderMain();
    const btn = await findAllByTestId('todo-item');
    expect(btn.length).toBe(2);
  });

  it('should allow you to mark a todo as done', async () => {
    const {findAllByTestId} = RenderMain();
    const btn = await findAllByTestId('todo-check-mark');
    const firstBtn = btn[0];
    expect(store.getState().todoCollection.entity[0].done).toBe(false);
    await fireEvent.press(firstBtn);
    expect(store.getState().todoCollection.entity[0].done).toBe(true);
  });
});
