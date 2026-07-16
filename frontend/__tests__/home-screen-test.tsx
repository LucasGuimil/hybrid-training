import { render, screen } from '@testing-library/react-native'

import HomeScreen from '@/app/index';

type resolveFetchType = (value: Response) => void;

describe('<HomeScreen />', () => {
  let fetchSpy: jest.SpyInstance;
  let resolveFetch: resolveFetchType;
  
  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() =>
      new Promise((resolve) => {
        resolveFetch = resolve;
      }
    ))
  })

  afterEach(() => { 
    jest.restoreAllMocks()}
  )
  it('When loading, displays the loading indicator', async () => {
    await render(<HomeScreen />)
    const loading = screen.getByTestId('loading-indicator')
    return expect(loading).toBeOnTheScreen()
  });
  it('When loaded, displays all the excercises', async () => {
    await render(<HomeScreen />)
      resolveFetch({
        json: () => Promise.resolve([      
          { 
            id: '1', 
            name: 'Dominadas de Prueba', 
            muscleGroup: 'Pull', 
            category: 'Calisthenics', 
            image: 'img.png' 
          }]),
      } as Response)
    const list = await screen.findByTestId('exercises-list');
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(list).toBeOnTheScreen()
  });
});
