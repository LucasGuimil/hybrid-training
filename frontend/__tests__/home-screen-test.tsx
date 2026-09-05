import { render, screen } from '@testing-library/react-native'
import useRouter from 'expo-router';

import HomeScreen from '@/app/index';

jest.mock("expo-router")


describe('<HomeScreen />', () => {
  const mockNavigate = jest.fn()
  test('When loaded, shows welcome text with user name', async () => {
    await render(<HomeScreen />)
    const welcome = screen.getByText(`Welcome to Hybrid Training App!`)
    expect(welcome).toBeOnTheScreen()
  });
  test('When loaded, under the welcome text, display two buttons', async () => {
    await render(<HomeScreen />)
    const newWorkoutButton = screen.getByText("New Workout");
    const viewWorkoutsButton = screen.getByText("View Saved Workouts");
    expect(newWorkoutButton).toBeOnTheScreen()
    expect(viewWorkoutsButton).toBeOnTheScreen()
  });
});
