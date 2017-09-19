import React from 'react';
import {Link} from 'react-router-dom';

import Block from '@core/components/block';

function CarsPage() {
  return (
    <div>
      <Block>
        <Link to='/'>← Вернуться на главную</Link>
      </Block>

      <Block>
        Здесь будет список автомобилей.
      </Block>
    </div>
  );
}

export default CarsPage;
