export const SET_INFO = "SET_INFO";
export const SET_STATE = "SET_STATE";
export const SET_LOGIN = "SET_LOGIN";
export const SET_ACTIVE = "SET_ACTIVE";
export const SET_DATA = "SET_DATA";
export const CLEAR_INFO = "CLEAR_INFO";
export const CHANGE_ORDER = "CHANGE_ORDER";
export const ADD_GOOD = "ADD_GOOD";

export function setData(data) {
  return function (dispatch) {
    dispatch({
      type: SET_DATA,
      data: data,
    });
  };
}

export function changeOrder(index, data) {
  return function (dispatch) {
    dispatch({
      type: CHANGE_ORDER,
      index: index,
      length: data.length,
    });
  };
}

export function addGood(card) {
  return function (dispatch) {
    dispatch({
      type: ADD_GOOD,
      data: card,
    });
  };
}

export function setInfo(accessToken, refreshToken) {
  return function (dispatch) {
    dispatch({
      type: SET_INFO,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  };
}

export function clearInfo(ingredients) {
  return function (dispatch) {
    dispatch({ type: CLEAR_INFO });
  };
}

export function setLogin(valueLogin) {
  return function (dispatch) {
    dispatch({
      type: SET_LOGIN,
      valueLogin: valueLogin,
    });
  };
}

// функция получения json
export function fetchData(accessToken) {
  return function (dispatch) {
    fetch("/components", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status}`);
        }
      })
      .then((data) => dispatch({ type: SET_STATE, data: data }))
      .catch((e) => console.error(e));
  };
}

//изменение статуса активности модального окна
export function setActive(data) {
  return function (dispatch) {
    dispatch({ type: SET_ACTIVE, value: data });
  };
}
