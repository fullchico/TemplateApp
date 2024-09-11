import {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export const Container: React.FC<PropsWithChildren> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    gap: 8,
  },
});
