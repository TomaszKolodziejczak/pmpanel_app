import {
    ADD_USER,
    EDIT_USER,
    DELETE_USER,
    GET_USERS,
} from "../actions/userActions";

const userReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload;

        case ADD_USER:
            return [
                ...state, action.payload
            ];

        case EDIT_USER:
            return state.map(currentStateElement => {
                if (currentStateElement.user_id !== action.payload.user_id) {
                    return currentStateElement;
                }
                const {
                    first_name,
                    last_name,
                    email,
                    sex,
                    phone,
                } = action.payload

                return ({
                    first_name,
                    last_name,
                    email,
                    sex,
                    phone,
                    user_id: currentStateElement.user_id,
                })
            });

        case DELETE_USER:
            return state.filter(currentStateElement =>
                currentStateElement.user_id !== action.payload.user_id
            );

        default:
            return state;

    }
}

export default userReducer;