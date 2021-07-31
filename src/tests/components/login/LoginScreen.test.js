import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../../auth/AuthContext"
import LoginScreen from "../../../components/login/LoginScreen"

describe('Tests on <LoginScreen />', () => {
  
  const mockHistory={
    replace: jest.fn(),
  }

  const {user, dispatch} = {
    user: {
      logged: false,
    },
    dispatch: jest.fn(),
  }

  const wrapper = mount(
  <AuthContext.Provider value={{ dispatch }}>
      <LoginScreen history={mockHistory}/>
  </AuthContext.Provider>
  );

  test('should show properly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should make the dispatch and nav', () => {
    wrapper.find('button').simulate('click')

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockHistory.replace).toHaveBeenCalledTimes(1);
  })
  
  
})
