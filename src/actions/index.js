import { ADD_ARTICLE, REMOVE_ARTICLE, LOGIN, LOGOUT } from "../constants/actionTypes";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });

export const removeArticle = id => ({ type: REMOVE_ARTICLE, payload: id });

export const logIn = user => ({ type: LOGIN, payload: user });

export const logOut = user => ({ type: LOGOUT, payload: user });