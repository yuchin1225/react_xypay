import * as actionTypes from "./action-types.js";

//登入成功寫入資料
export const loginSuccess = (user) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: user
})

//登入失敗清除資料
export const loginFailure = () => ({
    type: actionTypes.LOGIN_FAILURE
})

//登出清除資料
export const logout = () => ({
    type: actionTypes.LOGOUT
})


//紀錄車輛資料
export const carMessage = (carplate) => ({
    type: actionTypes.CAR_MESSAGE,
    payload: carplate
})

