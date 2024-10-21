import {by, device, element, expect, waitFor} from 'detox';

describe('TodoView Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render the screen correctly', async () => {
    await expect(element(by.id('Input-todo'))).toBeVisible();
    await expect(element(by.text('Add'))).toBeVisible();
  });

  it('should add a new todo item', async () => {
    const input = element(by.id('Input-todo'));
    const buttonAdd = element(by.text('Add'));

    await input.tap();
    await input.typeText('Testando novo todo');

    await buttonAdd.tap();

    // Verifica se o novo item foi adicionado
    await expect(element(by.text('Testando novo todo'))).toBeVisible();
  });
});
