import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import Comment from '../components/Comment';
import { getComments } from '../actions/commentActions';


const CommentsList = ({ id }) => {

    //get comments from api
    const dispatch = useDispatch()
    const comments = useSelector(store => store.comments);

    useEffect(() => {
        dispatch(getComments());
    }, []);

    const sortedByDate = comments.sort((a, b = 0) => Date.parse(b.created_date) - Date.parse(a.created_date));

    const commentsElements = sortedByDate.map(comment => (
        <Comment key={comment.id} {...comment} />
    ))

    const commentsFiltered = commentsElements.filter(comment =>
        comment.props.projectID === id
    );

    return (
        <ul>
            {commentsFiltered}
        </ul>
    );
}


export default CommentsList;