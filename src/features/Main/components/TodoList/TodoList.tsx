import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Todo} from '@models/todo';
import {TodoItem} from '../TodoItem/TodoItem';
import {spacing} from '@styles/spacing';
import {FlatList} from 'react-native-gesture-handler';

interface TodoListProps {
  todoCollection: Todo[];
  onDone: (id: string) => void;
}

export const TodoList = ({todoCollection, onDone}: TodoListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        data={todoCollection}
        renderItem={({item}) => (
          <View style={styles.spacer}>
            <TodoItem todo={item} onDone={onDone} />
          </View>
        )}
        keyExtractor={(item: Todo) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacer: {
    paddingBottom: spacing.small,
  },
});
