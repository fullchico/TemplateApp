import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

export const HStack: React.FC<PropsWithChildren> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
});
