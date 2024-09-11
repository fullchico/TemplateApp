import React from 'react';
import {StatusBar as NativeStatusBar} from 'react-native';

export const StatusBar: React.FC = () => {
  return <NativeStatusBar translucent backgroundColor="#fff" />;
};
