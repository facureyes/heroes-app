import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import DashboardRoutes from "../../routers/DashboardRoutes"

describe('Tests on <DashboardRoutes />', () => {
  
  const context = { 
    user: {
      logged: true,
      name: 'Facu',
    },
    dispatch: jest.fn(),
  };

  test('should show properly', () => {
    const wrapper = mount(
      <AuthContext.Provider value={context} >
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
      );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Facu');
  })
  
})
