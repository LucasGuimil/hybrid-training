import { render, screen, userEvent } from '@testing-library/react-native'
import { useRouter } from 'expo-router';
import HomeScreen from '@/app/index';

jest.mock("expo-router", () => ({
  useRouter: jest.fn()
}))


describe('<HomeScreen />', () => {
  const mockNavigate = jest.fn()
  const user = userEvent.setup()
  beforeEach(() => {
    (useRouter as unknown as jest.Mock).mockReturnValue({navigate: mockNavigate})
  })
  afterEach(()=> {
    jest.clearAllMocks()
  })
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
  test('When "New Workout" button is pressed, navigate to new workout screen', async () => {
    await render(<HomeScreen />)
    const newWorkoutButton = screen.getByText("New Workout");
    await user.press(newWorkoutButton)
    expect(mockNavigate).toHaveBeenCalledWith("/new-workout")
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })
  test('When "View Saved Workouts" button is pressed, navigate to saved workouts screen', async () => {
    await render(<HomeScreen />)
    const viewWorkoutsButton = screen.getByText("View Saved Workouts");
    await user.press(viewWorkoutsButton)
    expect(mockNavigate).toHaveBeenCalledWith("/saved-workouts")
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })
});
