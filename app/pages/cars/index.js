import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {modeSet, apiCarsLoad} from '@core/actions';
import Block from '@core/components/block';
import Table from './table';

function CarsPage(props) {
  const {mode, cars, setMode} = props;

  return (
    <div>
      <Block>
        <Link to='/'>← Вернуться на главную</Link>
      </Block>

      <Block>
        <Table
          mode={mode}
          cars={cars || []}
          onModeChange={value => setMode(value)}/>
      </Block>
    </div>
  );
}

CarsPage.propTypes = {
  setMode: PropTypes.func,
  loadCars: PropTypes.func,

  mode: PropTypes.string,
  cars: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

CarsPage.preload = function(match, dispatch, state) {
  const {loadCars} = mapDispatchToProps(dispatch);
  if (!state.api.cars) {
    return loadCars();
  }

  return true;
};

function mapStateToProps(state) {
  return {
    mode: state.api.mode,
    cars: state.api.cars
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMode: mode => dispatch(modeSet(mode)),
    loadCars: () => dispatch(apiCarsLoad()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsPage);
