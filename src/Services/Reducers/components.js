import {
  SET_INFO,
  SET_LOGIN,
  SET_STATE,
  SET_ACTIVE,
  SET_DATA,
  CLEAR_INFO,
  CHANGE_ORDER,
  ADD_GOOD,
} from "../Actions/actions";

import { combineReducers } from "redux";
export const LOGIN_URL_SUCCESS = "LOGIN_URL_SUCCESS";
export const LOGIN_URL_ERROR = "LOGIN_URL_ERROR";
export const LOGIN_URL_REQUEST = "LOGIN_URL_REQUEST";
export const ORDER_URL_SUCCESS = "ORDER_URL_SUCCESS";
export const ORDER_URL_ERROR = "ORDER_URL_ERROR";
export const ORDER_URL_REQUEST = "ORDER_URL_REQUEST";
export const SET_NUMBER = "SET_NUMBER";
export const CLEAR_CARD = "CLEAR_CARD";
const initialState = {
  accessToken: "",
  refreshToken: "",
  valueLogin: "",
  data: [],
  isActiv: false,
  cardData: null,
  orderInfo: [],
  loginSuccess: false,
  loginError: false,
  loginRequest: false,
  orderSuccess: false,
  orderError: false,
  orderRequest: false,
  number: -1,
};

export const componentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFO: {
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    }
    case LOGIN_URL_REQUEST: {
      return {
        ...state,
        loginError: false,
        loginSuccess: false,
        loginRequest: true,
      };
    }

    case LOGIN_URL_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginError: false,
        loginSuccess: true,
      };
    }

    case LOGIN_URL_ERROR: {
      return {
        ...state,
        loginRequest: false,
        loginError: true,
        loginSuccess: false,
      };
    }

    case ORDER_URL_REQUEST: {
      return {
        ...state,
        orderError: false,
        orderSuccess: false,
        orderRequest: true,
      };
    }

    case ORDER_URL_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderError: false,
        orderSuccess: true,
      };
    }

    case ORDER_URL_ERROR: {
      return {
        ...state,
        loginRequest: false,
        loginError: true,
        loginSuccess: false,
      };
    }

    case CHANGE_ORDER: {
      return {
        ...state,
        orderInfo: [
          ...state.orderInfo.slice(0, action.index),
          ...state.orderInfo.slice(action.index + 1, action.length),
        ],
      };
    }

    case ADD_GOOD: {
      return {
        ...state,
        orderInfo: [...state.orderInfo, action.data],
      };
    }
    case SET_DATA: {
      return {
        ...state,
        cardData: action.data,
      };
    }

    //изменение статуса активности
    case SET_ACTIVE: {
      return {
        ...state,
        isActiv: action.value,
      };
    }

    //изменение статуса активности
    case SET_NUMBER: {
      return {
        ...state,
        number: action.data,
      };
    }

    case CLEAR_INFO: {
      return {
        ...state,
        cardData: null,
        number: -1,
        orderInfo: [],
      };
    }

    case CLEAR_CARD: {
      return {
        ...state,
        cardData: null,
      };
    }
    case SET_LOGIN: {
      return {
        ...state,
        valueLogin: action.valueLogin,
      };
    }
    case SET_STATE: {
      return {
        ...state,
        data: action.data,
      };
    }
    //иное
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  component: componentReducer,
});
