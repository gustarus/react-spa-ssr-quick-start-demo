const initialState = {
  mode: 'default',
  cars: false
};

export default function(state, action) {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case 'MODE_SET':
      return Object.assign({}, state, {mode: action.value});

    case 'CARS_SET':
      return Object.assign({}, state, {cars: action.items});

    default:
      return state;
  }
}
