import { FETCH_SALES_DATA } from '../actions/types';

const initialState = {
  json: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SALES_DATA:
      return {
        ...state,
        json: action.payload
      };
    default:
      return state;
  }
}