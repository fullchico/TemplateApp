import {useNavigation} from '@react-navigation/native';
import {Box, Button, Text, VStack} from 'native-base';
import React from 'react';

export const Details: React.FC = () => {
  const navigate = useNavigation();

  const handleNavigate = () => {
    navigate.navigate('Home');
  };
  return (
    <Box
      alignItems="center"
      bg="background.default"
      flex={1}
      justifyContent="center">
      <VStack space={4} w="80%">
        {/* Exemplo de botões utilizando as cores primária, secundária, de sucesso e erro */}
        <Button
          _text={{color: 'text.gray.50'}}
          bg="primary.500"
          onPress={handleNavigate}>
          Voltar para home
        </Button>

        {/* Exemplo de card */}
        <Box bg="background.card.100" borderRadius="lg" p={4}>
          <Text color="text.gray.50" fontSize="md">
            Card com fundo de nível 100
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
