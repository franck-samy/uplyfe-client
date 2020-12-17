import axios from "axios";

const userService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export function updateUser(id, user) {
  return userService
    .put(`/profile/${id}`, user, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      return {
        status: true,
        data: response.data,
      };
    })
    .catch((err) => {
      console.log(err.response);
      return {
        status: false,
        errorMessage: err.response.data.errorMessage,
      };
    });
}

export function getAllUsers() {
  return userService.get("/all-users").then((res) => res.data);
}

export function getSingleUser(id) {
  return userService
    .get(`/user/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.response);
      return {
        status: false,
        errorMessage: err.response.data.errorMessage,
      };
    });
}
