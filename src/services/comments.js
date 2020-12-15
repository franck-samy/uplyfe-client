import axios from "axios";

const commentService = axios.create({
  baseURL: "http://localhost:5005/api",
});

export function addNewComment(comment) {
  return (
    commentService
      .post("/new-comment", comment, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      })
      // .then((response) => {
      //   return {
      //     status: true,
      //     data: response.data,
      //   };
      // })
      .catch((err) => {
        console.log("THIS IS NOT WORKING", err.response);
        return {
          status: false,
          errorMessage: err.response.data.errorMessage,
        };
      })
  );
}

export function getAllComments() {
  return commentService.get("/all-comments").then((res) => res.data);
}

export function getSingleComment(id) {
  return commentService
    .get(`/comment/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.response);
      return {
        status: false,
        errorMessage: err.response.data.errorMessage,
      };
    });
}
