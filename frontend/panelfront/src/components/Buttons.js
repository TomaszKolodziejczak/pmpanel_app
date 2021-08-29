import React from 'react';
import { useHistory } from 'react-router-dom';



const BackButton = () => {

    const history = useHistory();
    const handleClick = () => history.goBack();

    return (
        <button
            style={{ margin: 10 }}
            // htmlType="button"
            className="btn btn-dark"
            onClick={handleClick}>
            <i className="fas fa-undo"> Back </i>
        </button>
    )
}

export default BackButton;