const initialState = {
  mode: 'default',
  cars: [
    {
      id: 1,
      code: '(ВАЗ) Granta',
      price: '379 900 ₽',
      year: '2015',
      engine: '1.6 MT'
    },
    {
      id: 2,
      code: 'XRAY I',
      price: '685 900 ₽',
      year: '2017',
      engine: '1.8 MT'
    },
    {
      id: 3,
      code: '(ВАЗ) Granta',
      price: '379 900 ₽',
      year: '2017',
      engine: '1.6 MT'
    }
  ]
};

export default function(state, action) {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case 'MODE_SET':
      return Object.assign({}, state, {mode: action.value});

    default:
      return state;
  }
}
