import {NativeBaseProvider} from 'native-base';
import {PropsWithChildren} from 'react';

import {customTheme} from '../assets/styles/theme';

export const NativeBaseThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <NativeBaseProvider theme={customTheme}>{children}</NativeBaseProvider>
  );
};
