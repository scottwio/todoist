import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from '@components/TextInput/TextInput';
import {useDispatch} from 'react-redux';
import {addTodoItemActionCreator} from '@store/todoCollection/actions';
import {RootStackParamList} from '@root/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {colors} from '@styles/colors';
import {Text} from '@components/Text/Text';
import {Button} from '@components/Button/Button';
import {spacing} from '@styles/spacing';

type CreateScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Create'
>;
type CreateScreenRouteProp = RouteProp<RootStackParamList, 'Create'>;

type CreateProps = {
  navigation: CreateScreenNavigationProp;
  route: CreateScreenRouteProp;
};

export const Create = ({navigation}: CreateProps) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  useEffect(() => {
    navigation.setOptions({headerShown: true});
  }, [navigation]);

  function addTodo() {
    if (name === '') {
      return;
    }
    dispatch(addTodoItemActionCreator(name));
    navigation.goBack();
  }

  function changeText(value: string) {
    setName(value);
  }

  return (
    <View style={styles.container}>
      <Text textStyle="bold" style={styles.text}>
        Todo name
      </Text>
      <TextInput
        value={name}
        onChangeText={changeText}
        onSubmitEditing={addTodo}
        blurOnSubmit
        enablesReturnKeyAutomatically
        autoFocus
        testID="create-input"
      />
      <Button
        onPress={addTodo}
        style={styles.button}
        title={'Create'}
        testID="create-todo-submit"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.default,
    paddingTop: spacing.large,
    flex: 1,
    backgroundColor: colors.redBackground,
  },
  button: {
    paddingTop: spacing.large,
  },
  text: {
    paddingBottom: spacing.default,
  },
});
