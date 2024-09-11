import {StyleSheet, Text, View} from 'react-native';

import {HStack} from '../ui';
import {Input} from '../ui/Input';

export const InputParticipant: React.FC = () => {
  return (
    <HStack>
      <View
        style={{
          flex: 1,
        }}>
        <Input placeholder="Testando" value="rewre" onChangeText={() => {}} />
      </View>

      <View style={styles.button}>
        <Text style={styles.text}>Teste</Text>
      </View>
    </HStack>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#000',
  },
});
