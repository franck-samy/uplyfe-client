import React from "react";

const SingleComment = (props) => {
  console.log("INSIDE SINGLLE COMMENT", props);
  return (
    <div>
      {props.item._id === props.comment_item && (
        <div className="SingleComment">
          <p>Author:{props.author.username}</p>
          <p>Date:{props.date}</p>
          <p>ItemID: {props.item._id}</p>
          <p>Comment:{props.commentText}</p>
        </div>
      )}
    </div>
  );
};

export default SingleComment;
