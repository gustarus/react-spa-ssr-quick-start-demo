import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {modeSet, apiCarsLoad, apiCarLoad, apiCarSave, apiCarDelete, carUnset} from '@core/actions';
import Block from '@core/components/block';
import Table from './table';
import Form from './form';

class CarsPage extends Component {
  static propTypes = {
    setMode: PropTypes.func,
    loadCars: PropTypes.func,
    readCar: PropTypes.func,
    saveCar: PropTypes.func,
    deleteCar: PropTypes.func,
    unsetCar: PropTypes.func,

    history: PropTypes.object,
    match: PropTypes.object,

    mode: PropTypes.string,
    cars: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    car: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

  };

  static preload(match, dispatch, state) {
    const {loadCars, readCar, unsetCar} = mapDispatchToProps(dispatch);
    const id = match.params && match.params.id
      ? parseInt(match.params.id, 10) : null;
    let promises = [];

    if (!state.api.cars) {
      promises.push(loadCars());
    }

    const isCar = state.api.car;
    const isCarEqual = state.api.car && state.api.car.id === id;
    if (id && (!isCar || !isCarEqual)) {
      promises.push(readCar(id));
    } else {
      promises.push(unsetCar());
    }

    return promises.length
      ? Promise.all(promises) : true;
  }

  onModeChange(mode) {
    this.props.setMode(mode);
  }

  onUpdate(car) {
    const {history} = this.props;
    history.push(`/cars/${car.id}/update`);
  }

  onDelete(car) {
    const {deleteCar} = this.props;
    if (confirm(`Вы действительно хотите удалить модель ${car.code}?`)) {
      deleteCar(car);
    }
  }

  onSubmit(values) {
    const {saveCar, history, car} = this.props;
    const id = car && car.id || null;
    saveCar({...values, id})
      .then(() => history.push('/cars'));
  }

  onCancel() {
    const {history} = this.props;
    history.push('/cars');
  }

  render() {
    const {match, mode, cars, car} = this.props;
    const path = match.url.split('/');
    const action = path[path.length - 1];

    return (
      <div>
        <Block>
          <Link to='/'>← Вернуться на главную</Link>
        </Block>

        <Block>
          <Link to='/cars/create'>Добавить автомобиль</Link>
        </Block>

        <Block>
          <Table
            mode={mode}
            cars={cars || []}
            onModeChange={value => this.onModeChange(value)}
            onUpdate={item => this.onUpdate(item)}
            onDelete={item => this.onDelete(item)}/>
        </Block>

        {(action === 'create' || action === 'update' && car) && (
          <Form
            car={car || {}}
            onSubmit={values => this.onSubmit(values)}
            onCancel={() => this.onCancel()}/>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mode: state.api.mode,
    cars: state.api.cars,
    car: state.api.car
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMode: mode => dispatch(modeSet(mode)),
    loadCars: () => dispatch(apiCarsLoad()),
    readCar: id => dispatch(apiCarLoad(id)),
    saveCar: item => dispatch(apiCarSave(item)),
    deleteCar: item => dispatch(apiCarDelete(item)),
    unsetCar: () => dispatch(carUnset())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsPage);
