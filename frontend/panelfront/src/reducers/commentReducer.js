import {
    GET_COMMENTS,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
} from "../actions/commentActions";

const commentReducer = (state = [], action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return action.payload;

        case ADD_COMMENT:
            return [
                ...state, action.payload
            ];

        case EDIT_COMMENT:
            return state.map(currentStateElement => {
                if (currentStateElement.id !== action.payload.id) {
                    return currentStateElement;
                }

                return ({
                    text: action.payload.text,
                    projectID: currentStateElement.projectID,
                    id: currentStateElement.id
                })
            });

        case DELETE_COMMENT:
            return state.filter(currentStateElement =>
                currentStateElement.id !== action.payload.id);

        default:
            console.warn(`Com - Unknown action type: ${action.type}`);
            return state;

    }
}


export default commentReducer;