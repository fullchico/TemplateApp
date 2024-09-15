import {PropsWithChildren} from 'react';

import {NativeBaseThemeProvider} from './styles.providers';

export const WrapperProviders: React.FC<PropsWithChildren> = ({children}) => {
  return <NativeBaseThemeProvider>{children}</NativeBaseThemeProvider>;
};
