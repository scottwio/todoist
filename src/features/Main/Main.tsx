import React from 'react';
import {TodoList} from './components/TodoList/TodoList';
import {
  useTodoCollection,
  toggleDoneActionCreator,
} from '@store/todoCollection/actions';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@root/navigation';
import {RouteProp} from '@react-navigation/native';
import {colors} from '@styles/colors';
import {spacing} from '@styles/spacing';
import {Text} from '@components/Text/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {Button} from '@components/Button/Button';

export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;
type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;

type MainProps = {
  navigation: MainScreenNavigationProp;
  route: MainScreenRouteProp;
};

export const Main = ({navigation}: MainProps) => {
  const todoCollection = useTodoCollection();
  const dispatch = useDispatch();

  function goToCreate() {
    navigation.navigate('Create');
  }

  function done(id: string) {
    dispatch(toggleDoneActionCreator(id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text textStyle={'heading'} style={styles.text}>
          To-do List
        </Text>
        <TodoList todoCollection={todoCollection.entity} onDone={done} />
      </View>

      <Button
        title={'Create to-do'}
        onPress={goToCreate}
        style={styles.button}
        testID="create-todo"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.redBackground,
    padding: spacing.default,
  },
  content: {flex: 2},
  spacer: {
    paddingBottom: spacing.small,
  },
  text: {
    paddingBottom: spacing.medium,
    paddingTop: spacing.large,
  },
  button: {
    paddingTop: spacing.large,
  },
});
