import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom";
import SearchScreen from "../../../components/search/SearchScreen"

describe('Tests on <SearchScreen />', () => {
  
  test('should show with default values', () => {
    const wrapper = mount(
    <MemoryRouter initialEntries={['/search']}>
      <Route path="/search" component={SearchScreen} />
    </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero.');
  });
  
  test('should show Batman and input with queryString value', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
      <Route path="/search" component={SearchScreen} />
    </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper.find('HeroeCard').prop('superhero').toLowerCase()).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });


  test('should show error if Hero isn\'t found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=salchipapa']}>
      <Route path="/search" component={SearchScreen} />
    </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no hero with \"salchipapa\".');
  })
  

  test('should call push from history', () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
      <Route path="/search" component={() => <SearchScreen history={history} />} />
    </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman',
      }
    });

    wrapper.find('form').simulate('submit');

    expect(history.push).toHaveBeenCalledWith('?q=batman');
    

  })
  
})
