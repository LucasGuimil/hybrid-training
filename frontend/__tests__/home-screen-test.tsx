import { render, screen } from '@testing-library/react-native'

import HomeScreen from '@/app/index';
process.loadEnvFile("./.env")
describe('<HomeScreen />', () => {
  it('When loaded, displays all the excercises', async () => {
    await render(<HomeScreen />);
    const list = screen.getByRole("FlatList")
    expect(list).toBeOnTheScreen()
  });
});
