import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

export const VStack: React.FC<PropsWithChildren> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: 8,
  },
});
