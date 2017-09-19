import React from 'react';
import renderer from 'react-test-renderer';

import Table from '../table';

function callback() {
  console.log('Callback');
}

const cars = [
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
];

test('Table component renders correctly', () => {
  const component = renderer.create(
    <Table
      mode='default'
      cars={cars}
      onModeChange={callback}
      onUpdate={callback}
      onDelete={callback}/>
  );

  expect(component.toJSON())
    .toMatchSnapshot();
});
