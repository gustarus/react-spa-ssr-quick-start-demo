import React from 'react';
import {Link} from 'react-router-dom';

import Block from '@core/components/block';

function HomePage() {
  return (
    <div>
      <Block>
        <Link to='/cars'>Показать все автомобили →</Link>
      </Block>

      <Block>
        <Link to='/nope'>Показать страницу, которой нет</Link>
      </Block>
    </div>
  );
}

export default HomePage;
