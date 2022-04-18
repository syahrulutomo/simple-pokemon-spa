import {SET_DATA} from "./types";

export const setData = (data) => {
  return {
    type: SET_DATA,
    data,
  };
};
