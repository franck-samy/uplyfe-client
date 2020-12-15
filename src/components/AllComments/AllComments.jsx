import React from "react";
import SingleComment from "../SingleComment/SingleComment";

const AllComments = (props) => {
  console.log("PROPS INSIDE COMMENT:", props.comments);
  return (
    <div>
      {props.comments.map((el, i) => {
        return (
          <ul>
            <li>
              <SingleComment
                {...el}
                key={i}
                item={props.item}
                comments={props.comment}
              />
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default AllComments;
