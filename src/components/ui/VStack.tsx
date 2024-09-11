import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

export const VStack: React.FC<PropsWithChildren> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
  },
});
