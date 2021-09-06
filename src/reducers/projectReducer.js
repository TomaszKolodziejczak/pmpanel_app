import {
    ADD_PROJECT,
    EDIT_PROJECT,
    DELETE_PROJECT,
    GET_PROJECTS
} from "../actions/projectActions";

const initState = []

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return action.payload;

        case ADD_PROJECT:
            return [
                ...state, action.payload
            ];

        case EDIT_PROJECT:
            return state.map(currentStateElement => {
                if (currentStateElement.project_id !== action.payload.project_id) {
                    return currentStateElement;
                }
                const {
                    project_name,
                    start_date,
                    end_date,
                    status,
                    description,
                    participants,
                } = action.payload

                return ({
                    project_name,
                    start_date,
                    end_date,
                    status,
                    description,
                    participants,
                    project_id: currentStateElement.project_id,
                })
            });

        case DELETE_PROJECT:
            return state.filter(currentStateElement =>
                currentStateElement.project_id !== action.payload.project_id
            );

        default:
            return state;

    }
}


export default projectReducer;