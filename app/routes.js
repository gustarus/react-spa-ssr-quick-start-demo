import HomePage from '@core/pages/home';
import CarsPage from '@core/pages/cars';
import ErrorPage from '@core/pages/error';

export default [{
  path: '/',
  exact: true,
  component: HomePage
}, {
  path: '/cars',
  exact: true,
  component: CarsPage
}, {
  path: '/cars/create',
  exact: true,
  component: CarsPage
}, {
  path: '/cars/:id/update',
  exact: true,
  component: CarsPage
}, {
  component: ErrorPage
}];
