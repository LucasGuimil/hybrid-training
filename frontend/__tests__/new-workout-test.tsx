import NewWorkoutScreen from '@/app/new-workout';
import { render, screen, userEvent } from '@testing-library/react-native'
import { useRouter } from 'expo-router';

jest.mock("expo-router", () => ({
  useRouter: jest.fn()
}))


describe('<NewWorkoutScreen />', () => {
  const mockNavigate = jest.fn()
  const user = userEvent.setup()
  beforeEach(() => {
    (useRouter as unknown as jest.Mock).mockReturnValue({ navigate: mockNavigate })
  })
  afterEach(() => {
    jest.restoreAllMocks()
  }
  )

  test('When loaded, shows the title and description', async () => {
    await render(<NewWorkoutScreen />)
    const title = screen.getByText("New Workout");
    const description = screen.getByText("This is where you can create a new workout.");
    expect(title).toBeOnTheScreen()
    expect(description).toBeOnTheScreen()
  });
  test('When loaded, asks for the title and shows the input field', async () => {
    await render(<NewWorkoutScreen />)
    const title = screen.getByText("Workout Title");
    const input = screen.getByPlaceholderText("Enter a title for your workout");
    expect(title).toBeOnTheScreen()
    expect(input).toBeOnTheScreen()
    expect(input.props.value).toBe("")
  });

  test('When loaded, shows one button to add exercises', async () => {
    await render(<NewWorkoutScreen />)
    const addExerciseButton = screen.getByText("Add Exercise");
    expect(addExerciseButton).toBeOnTheScreen()
  })

  test('When there are no exercises, shows a message indicating that there are no exercises', async () => {
    await render(<NewWorkoutScreen />)
    const noExercisesMessage = screen.getByText("No exercises added yet.");
    expect(noExercisesMessage).toBeOnTheScreen()
  })
  test('When there are no exercises, the button for start the routine is disabled', async () => {
    await render(<NewWorkoutScreen />)
    const startWorkoutButton = screen.getByText("Start Workout");
    expect(startWorkoutButton).toBeOnTheScreen()
    expect(startWorkoutButton.props.accessibilityState.disabled).toBe(true)
  })

  test('When "Add Exercise" button is pressed, shows the list of exercises to add', async () => {
    await render(<NewWorkoutScreen />)
    const addExerciseButton = screen.getByText("Add Exercise");
    await user.press(addExerciseButton)
    expect(mockNavigate).toHaveBeenCalledWith("/exercise-list")
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })
  test.skip('When there are exercises on the list, shows the exercises on the screen', async () => {
    await render(<NewWorkoutScreen />)
    const list = screen.getByTestId('exercises-list');
    const exercise1 = screen.getByText("Push Up");
    const exercise2 = screen.getByText("Plank");
    expect(list).toBeOnTheScreen()
    expect(exercise1).toBeOnTheScreen()
    expect(exercise2).toBeOnTheScreen()
  })
  test.skip('When there are exercises on the list, the button for start the routine is enabled', async () => {
    await render(<NewWorkoutScreen />)
    const startWorkoutButton = screen.getByText("Start Workout");
    expect(startWorkoutButton).toBeOnTheScreen()
    expect(startWorkoutButton.props.accessibilityState.disabled).toBe(false)
  })
})