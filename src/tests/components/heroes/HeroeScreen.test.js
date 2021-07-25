import { mount, shallow } from "enzyme"
import { MemoryRouter, Redirect, Route } from "react-router-dom";
import HeroeScreen from "../../../components/heroes/HeroeScreen"

describe('Tests on <HeroeScreen />', () => {
  
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };
  
  test('should redirect if there arent args in the URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroeScreen history={ historyMock } />
      </MemoryRouter>
    );

    expect(wrapper.find('Redirect').exists()).toBe(true);
  })

  test('should show a hero is id exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route exact path="/heroe/:heroeId" component= {HeroeScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('img').exists()).toBe(true);
  })
  
  test('should return to previous page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route 
          exact 
          path="/heroe/:heroeId" 
          component= {() => <HeroeScreen history={ historyMock }/>} />
      </MemoryRouter>
    );
    
    wrapper.find('button').simulate('click');
    expect(historyMock.goBack).toHaveBeenCalledTimes(1);
    expect(historyMock.push).not.toHaveBeenCalled();
  })

  test('should return to \'/\'', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route 
          exact 
          path="/heroe/:heroeId" 
          component= {() => <HeroeScreen history={ historyMock }/>} />
      </MemoryRouter>
    );
    
    wrapper.find('button').simulate('click');
    expect(historyMock.push).toHaveBeenCalledTimes(1);
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  })

  test('should call Redirect if hero id doesn\'t exist', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider-random-things']}>
        <Route 
          exact 
          path="/heroe/:heroeId" 
          component= {() => <HeroeScreen history={ historyMock }/>} />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');
  })
  
  
})
