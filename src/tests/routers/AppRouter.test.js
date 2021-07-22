import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import AppRouter from "../../routers/AppRouter"

describe('Tests on <AppRouter />', () => {

  
  test('should show login page if user isn\'t authenticated', () => {
    const user = { logged: false }
    const wrapper = mount(
      <AuthContext.Provider value= {{ user , dispatch: jest.fn() }}>
        <AppRouter />
      </AuthContext.Provider>
    );
    
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').text().includes('Login')).toBe(true);
  })

  test('should show Marvel component if user is authenticated', () => {
    const user = {logged: true, name: 'Facu'}
    const wrapper = mount(
      <AuthContext.Provider value= {{ user , dispatch: jest.fn() }}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('h1').text().includes('Marvel')).toBe(true);
  })
  
  
})
