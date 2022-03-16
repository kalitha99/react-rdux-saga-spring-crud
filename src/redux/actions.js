import * as types from './actionType';

export const loadUserStart = () => ({
    type: types.LOAD_USER_START,
})

export const loadUserSuccess = (users) => ({
    type: types.LOAD_USER_SUCCESS,
    payload: users
})

export const loadUserError = (error) => ({
    type: types.LOAD_USER_ERROR,
    payload: error
})




export const createUser = (user) => ({
    type: types.CREATE_USER,
    payload: user
})

export const createUserSuccess = () => ({
    type: types.CREATE_USER_SUCCESS,
})

export const createUserError = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error
})




export const deleteUser = (userid) => ({
    type: types.DELETE_USER,
    payload: userid
})

export const deleteUserSuccess = (userid) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: userid
})

export const deleteUserError = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error
})




export const updateUser = (userInfo) => ({
    type: types.UPDATE_USER,
    payload: userInfo
})

export const updateUserSuccess = () => ({
    type: types.UPDATE_USER_SUCCESS,
    
})

export const updateUserError = (error) => ({
    type: types.UPDATE_USER_ERROR,
    payload: error
})