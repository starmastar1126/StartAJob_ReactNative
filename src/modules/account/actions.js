import types from './types';

export const setUser = (data) => ({
    type: types.SET_USER,
    payload: data,
});

export const signIn = (data) => ({
    type: types.SIGN_IN,
    payload: data,
});

export const signOut = (data) => ({
    type: types.SIGN_OUT,
    payload: data,
})