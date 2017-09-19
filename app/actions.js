import axios from 'axios';


// create demo api
const api = axios.create({
  baseURL: 'http://localhost:3000/'
});


export function loaderSet(value) {
  return {type: 'LOADER_SET', value};
}

export function loaderUnset() {
  return {type: 'LOADER_UNSET'};
}

export function loaderListen(promise) {
  return function(dispatch) {
    setTimeout(() => dispatch(loaderSet(40)), 50);
    return promise.then(() => {
      setTimeout(() => dispatch(loaderSet(100)), 100);
      setTimeout(() => dispatch(loaderUnset()), 1000);
    });
  };
}

export function modeSet(value) {
  return {type: 'MODE_SET', value};
}

export function carsSet(items) {
  return {type: 'CARS_SET', items};
}

export function carsAdd(items) {
  return {type: 'CARS_ADD', items};
}

export function carsDelete(items) {
  return {type: 'CARS_DELETE', items};
}

export function carsUnset() {
  return {type: 'CARS_UNSET'};
}

export function carSet(item) {
  return {type: 'CAR_SET', item};
}

export function carUnset() {
  return {type: 'CAR_UNSET'};
}

export function apiCarsLoad() {
  return function(dispatch) {
    return api.get('cars').then(response => {
      dispatch(carsSet(response.data));
    });
  };
}

export function apiCarLoad(id) {
  return function(dispatch) {
    return api.get(`cars/${id}`).then(response => {
      dispatch(carSet(response.data));
    });
  };
}

export function apiCarSave(item) {
  return function(dispatch) {
    const chain = item.id
      ? api.put(`cars/${item.id}`, item)
      : api.post('cars', item);

    return chain.then(response => {
      dispatch(carsAdd([response.data]));
    });
  };
}

export function apiCarDelete(item) {
  return function(dispatch) {
    return api.delete(`cars/${item.id}`).then(() => {
      dispatch(carsDelete([item]));
    });
  };
}
