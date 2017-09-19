import axios from 'axios';


// create demo api
const api = axios.create({
  baseURL: 'http://localhost:3000/'
});


export function modeSet(value) {
  return {type: 'MODE_SET', value};
}

export function carsSet(items) {
  return {type: 'CARS_SET', items};
}

export function apiCarsLoad() {
  return function(dispatch) {
    return api.get('cars').then(response => {
      dispatch(carsSet(response.data));
    });
  };
}
