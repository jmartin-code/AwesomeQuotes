import { useEffect, useRef } from "react";
import useHttp from "../hooks/use-http";
import { addComment } from "../lib/api";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
    return () => {};
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <p>Loading comment...</p>
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows="5"
          ref={commentTextRef}
          required
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
