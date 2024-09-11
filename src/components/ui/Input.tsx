import {StyleSheet, TextInput} from 'react-native';

type InputProps = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
};

export const Input: React.FC<InputProps> = props => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    borderRadius: 8,
    padding: 8,
  },
});
