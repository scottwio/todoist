import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {Main} from '../Main/Main';
import {ReduxProvider, store} from '@store/store';

export const navigationMock = {
  navigate: jest.fn(),
};

const RenderMain = () =>
  render(
    <ReduxProvider>
      <Main navigation={navigationMock} />
    </ReduxProvider>,
  );

describe('Main Component', () => {
  it('should navigate to create page', () => {
    const {getByTestId} = RenderMain();
    const btn = getByTestId('create-todo');
    fireEvent.press(btn);
    expect(navigationMock.navigate).toBeCalledWith('Create');
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
