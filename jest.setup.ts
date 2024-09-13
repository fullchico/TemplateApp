// Mockando Animated para evitar problemas com a API de animação nos testes
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Suprimindo warnings no console para evitar ruído nos testes
jest.spyOn(console, 'warn').mockImplementation(() => {});

// Suprimindo erros no console para evitar ruído nos testes
jest.spyOn(console, 'error').mockImplementation(() => {});
