import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {HStack, VStack} from '../../ui';
import {Input} from '../../ui/Input';

export const FormAddParticipant: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const [participants, setParticipants] = React.useState<string[]>([]);

  const handleAddParticipant = () => {
    if (!value) {
      return;
    }

    if (participants.includes(value)) {
      return;
    }

    setParticipants([...participants, value]);
    setValue('');
  };

  const handleRemoveParticipant = React.useCallback(
    (index: number) => {
      const newParticipants = participants.filter((_, i) => i !== index);
      setParticipants(newParticipants);
    },
    [participants],
  );

  return (
    <VStack>
      <HStack>
        <View
          style={{
            flex: 1,
          }}>
          <Input placeholder="Testando" value={value} onChangeText={setValue} />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </HStack>

      <FlatList
        contentContainerStyle={styles.list}
        data={participants}
        keyExtractor={item => item}
        renderItem={({item, index}) => (
          <HStack>
            <View
              style={{
                flex: 1,
              }}>
              <Input disabled value={item} onChangeText={() => {}} />
            </View>

            <TouchableOpacity
              style={{...styles.button, backgroundColor: 'red'}}
              onPress={() => handleRemoveParticipant(index)}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </HStack>
        )}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 60,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
  },

  list: {
    flexGrow: 1,
    gap: 8,
  },
});
