import {
  FILTER_DATA_BY_DATE,
  FILTER_DATA_BY_STATUS,
  FILTER_DATA_BY_TYPE,
  GET_DATA,
  LOADING_DATA,
  LOADING_ERROR,
  Pagination_DATA,
} from "./ActionType";
import axios from "axios";

export const GET_DATA_API = () => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await axios.get("https://api.spacexdata.com/v4/capsules");

    let totalLength = res.data.length;
    let totalPage = Math.ceil(totalLength / 10);
    res.data.length = 10;
    dispatch({
      type: GET_DATA,
      payload: { data: res.data, totalPage: totalPage },
    });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};

export const filterByStatus = (status) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await axios.get(
      `https://api.spacexdata.com/v4/capsules?status=${status}`
    );

    dispatch({ type: FILTER_DATA_BY_STATUS, payload: res.data });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};

export const filterByType = (type) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await axios.get(
      `https://api.spacexdata.com/v4/capsules?type=${type}`
    );
    dispatch({ type: FILTER_DATA_BY_TYPE, payload: res.data });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};

export const filterByDate = (date) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    date = new Date(date).toISOString();
    const res = await axios.get(
      `https://api.spacexdata.com/v4/capsules?original_launch=${date}`
    );

    dispatch({ type: FILTER_DATA_BY_DATE, payload: res.data });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};

export const handlePage = (page) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await axios.get("https://api.spacexdata.com/v4/capsules");

    let end = Number(page) * 10;
    let start = end - 10;
    let newData = res.data.splice(start, end);
    dispatch({ type: Pagination_DATA, payload: newData });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};
