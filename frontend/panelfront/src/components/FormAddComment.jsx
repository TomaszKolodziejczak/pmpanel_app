import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addComment } from '../actions/commentActions';


const FormAddComment = ({
  text = '',
  projectID,
}) => {


  const [textInput, setTextInput] = useState(text);

  const dispatch = useDispatch();

  const handleTextChange = event => setTextInput(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();
    if (!textInput.length) {
      return;
    }

    const commentObject = {
      text: textInput,
      projectID,
    };

    setTextInput('')
    dispatch(addComment(commentObject));

  }

  return (
    <div className="container" style={{ margin: 15 }}>
      <div className="row align-items-center">
        <div className="col"></div>
        <div className="col-5">

          <form onSubmit={handleOnSubmit} style={{ display: 'inline', maxWidth: 200 }}>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={handleTextChange}
                value={textInput}
                className="form-control"
                placeholder={'Enter your comment here'}
                aria-describedby="button-addon1"
              />
            </div>
            <button className="btn btn-outline-primary"><i className="fas fa-plus-circle"> Add comment</i> </button>
          </form>

        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default FormAddComment;