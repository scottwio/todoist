import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Todo} from '@models/todo';
import {colors} from '@styles/colors';
import {spacing} from '@styles/spacing';
import {Text} from '@components/Text/Text';
import {CheckMark} from '../CheckMark/CheckMark';

interface TodoItemProps {
  todo: Todo;
  onDone: (id: string) => void;
}

export const TodoItem = ({todo, onDone}: TodoItemProps) => {
  const opacity = todo.done ? 0.5 : 1;

  return (
    <View style={[styles.container, {opacity}]} testID="todo-item">
      <View style={styles.checkMark}>
        <CheckMark
          checked={todo.done}
          onPress={() => {
            onDone(todo.id);
          }}
        />
      </View>
      <Text textStyle={'default'}>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.redDark,
    padding: spacing.default,
    borderRadius: 10,
  },
  checkMark: {
    flexBasis: 33,
    paddingLeft: 10,
  },
});
