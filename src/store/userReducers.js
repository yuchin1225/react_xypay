import * as actionTypes from "./action-types.js";

//初始狀態
const initUserState = {
    login: false,
    user: null
};

const userState = (state = initUserState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                login: true,
                user: action.payload
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                login: false,
                user: null
            }
        case actionTypes.LOGOUT:
            return {
                login: false,
                user: null
            }
        default:
            return state;
    }
};

export default userState;