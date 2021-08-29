export const CREATE_MESSAGE = 'CREATE_MESSAGES';
export const GET_ERRORS = 'GET_ERRORS'

//Create message
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

