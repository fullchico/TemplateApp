import {Box, Button, FlatList, HStack, Input, View} from 'native-base';
import React from 'react';

import {useTodoViewModel} from '../../../viewmodels/TodoViewModel';
import {ListTodo} from '../../components/ListTodo';

export const TodoView = () => {
  const {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    newTodoTitle,
    setNewTodoTitle,
  } = useTodoViewModel();

  return (
    <Box bg={'gray.900'} flex={1} p={10}>
      <View mt={10}>
        <HStack mb={4} space={2}>
          <Input
            flex={1}
            placeholder="Add new item"
            testID="Input-todo"
            value={newTodoTitle}
            onChangeText={setNewTodoTitle}
          />
          <Button testID="Add-todo" onPress={handleAddTodo}>
            Add
          </Button>
        </HStack>

        <FlatList
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <ListTodo
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
              index={index}
              item={item}
            />
          )}
          style={{
            height: '100%',
          }}
        />
      </View>
    </Box>
  );
};
