export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
