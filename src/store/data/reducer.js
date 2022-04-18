import {SET_DATA} from './types'

const initialState = {
  allData: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, allData: [...action.data] };
    default:
      return state;
  }
};