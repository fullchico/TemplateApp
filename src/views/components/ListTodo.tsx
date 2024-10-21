import {Box, Button, Divider, HStack, Text, VStack} from 'native-base';

export const ListTodo = ({
  item,
  index,
  handleDeleteTodo,
  handleToggleTodo,
}: {
  index: number;
  item: {id: number; title: string; completed: boolean};
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}) => (
  <Box testID={`ListTodo-${index}`}>
    <HStack alignItems="center" justifyContent="space-between" py={2}>
      <VStack>
        <Text strikeThrough={item.completed}>{item.title}</Text>
      </VStack>
      <HStack space={2}>
        <Button
          testID={`ToggleTodo-${index}`}
          onPress={() => handleToggleTodo(item.id)}>
          {item.completed ? '✔️' : '⭕'}
        </Button>
        <Button
          testID={`DeleteTodo-${index}`}
          onPress={() => handleDeleteTodo(item.id)}>
          🗑️
        </Button>
      </HStack>
    </HStack>
    <Divider />
  </Box>
);
