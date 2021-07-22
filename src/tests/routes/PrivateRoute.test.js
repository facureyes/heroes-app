import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../routers/PrivateRoute';

describe('Tests on <PrivateRoute />', () => {

  const props = {
    location: {
      pathname: '/dc'
    }
  };

  test('should show component if user is authenticated and save localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={true}
          component={()=> <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    ) 
    expect(wrapper.find('span').exists()).toBe(true)
  })
});
