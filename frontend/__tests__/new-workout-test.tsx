import NewWorkoutScreen from '@/app/new-workout';
import { render, screen } from '@testing-library/react-native'

describe('<NewWorkoutScreen />', () => {
  test('When loaded, shows the title and description', async () => {
    await render(<NewWorkoutScreen />)
    const title = screen.getByText("New Workout");
    const description = screen.getByText("This is where you can create a new workout.");
    expect(title).toBeOnTheScreen()
    expect(description).toBeOnTheScreen()
  });
}
)