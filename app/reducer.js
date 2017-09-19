const initialState = {
  loading: false,
  mode: 'default',
  cars: false,
  car: false
};

export default function(state, action) {
  if (!state) {
    return initialState;
  }

  let cars;
  switch (action.type) {
    case 'MODE_SET':
      return Object.assign({}, state, {mode: action.value});

    case 'LOADER_SET':
      return Object.assign({}, state, {loading: action.value});

    case 'LOADER_UNSET':
      return Object.assign({}, state, {loading: false});

    case 'CARS_SET':
      return Object.assign({}, state, {cars: action.items});

    case 'CARS_ADD':
      cars = state.cars.slice(0);
      for (let item of action.items) {
        const index = state.cars.findIndex(car => car.id === item.id);
        index >= 0 ? cars.splice(index, 1, item) : cars.push(item);
      }

      return Object.assign({}, state, {cars});

    case 'CARS_DELETE':
      cars = state.cars.slice(0);
      for (let item of action.items) {
        const index = state.cars.findIndex(car => car.id === item.id);
        index >= 0 && cars.splice(index, 1);
      }

      return Object.assign({}, state, {cars});

    case 'CARS_UNSET':
      return Object.assign({}, state, {cars: false});

    case 'CAR_SET':
      return Object.assign({}, state, {car: action.item});

    case 'CAR_UNSET':
      return Object.assign({}, state, {car: false});

    default:
      return state;
  }
}
