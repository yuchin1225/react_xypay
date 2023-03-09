import * as actionTypes from "./action-types.js";

//初始狀態
const initUserState = {
    carMessage: null
};

const userState = (state = initUserState, action) => {
    switch (action.type) {
        case actionTypes.CAR_MESSAGE:
            return {
                carMessage: action.payload
            }
        default:
            return state;
    }
};

export default userState;