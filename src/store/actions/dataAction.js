import { FETCH_SALES_DATA } from './types';
import data from '../../data/Webdev_data2.json';

export const fetchData = () => dispatch => {
  dispatch({
    type: FETCH_SALES_DATA,
    payload: data
  })
};