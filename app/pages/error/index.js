import React from 'react';
import {Link} from 'react-router-dom';

import Alert from '@core/components/alert';
import Block from '@core/components/block';

function ErrorPage() {
  return (
    <div>
      <Block>
        <Link to='/'>← Вернуться на главную</Link>
      </Block>

      <Block>
        <Alert type='error' title='404'>
          Извините, но страница не найдена.
        </Alert>
      </Block>
    </div>
  );
}

export default ErrorPage;
