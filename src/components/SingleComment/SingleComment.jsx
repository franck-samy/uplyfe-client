import React from "react";
import "./SingleComment.css";

const SingleComment = (props) => {
  console.log("INSIDE SINGLLE COMMENT", props);
  return (
    <div className="commentBox">
      {props.item._id === props.comment_item && (
        <div className="SingleComment">
          <p>
            <strong>{props.author.username}</strong>
          </p>
          {/* <p>Date:{props.date}</p>
          <p>ItemID: {props.item._id}</p> */}
          <hr />
          <p>{props.commentText}</p>
        </div>
      )}
    </div>
  );
};

export default SingleComment;
