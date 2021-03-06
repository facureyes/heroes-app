import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../routers/PrivateRoute';

describe('Tests on <PrivateRoute />', () => {

  const props = {
    location: {
      pathname: '/dc'
    }
  };

  Storage.prototype.setItem = jest.fn();

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
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('lastPath', '/dc')
  })

  test('should block component if user isn\'t authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={false}
          component={()=> <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    ) 

    expect(wrapper.html()).toBe('')

  })
});
