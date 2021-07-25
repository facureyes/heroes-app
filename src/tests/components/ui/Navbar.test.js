import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/NavBar"
import { types } from "../../../types/types";

describe('Tests on <NabBar />', () => {

  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  }
  
  const context = { 
    user: {
      logged: true,
      name: 'Facu',
    },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={context}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  
  test('should show properly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Facu');
  })
  
  test('should handle user logout', () => {
    wrapper.find('button').simulate('click');

    expect(context.dispatch).toHaveBeenCalledWith({ type: types.logout});
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  })
  
})
