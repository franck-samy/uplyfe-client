import axios from "axios";

const itemService = axios.create({
  baseURL: "http://localhost:5005/api",
});

export function addNewItem(item) {
  return itemService
    .post("/new-item", item, {
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

export function cloneNewItem(item) {
  return itemService
    .post("/clone-item", item, {
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

export function updateItem(id, item) {
  return itemService
    .put(`/item/${id}`, item, {
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

export function getAllItems() {
  return itemService.get("/all-items").then((res) => res.data);
}

export function getSingleItem(id) {
  return itemService
    .get(`/item/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.response);
      return {
        status: false,
        errorMessage: err.response.data.errorMessage,
      };
    });
}

export function getUserItem(userId) {
  return itemService
    .get(`/userItems/${userId}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function deleteSingleItem(id) {
  return itemService
    .delete(`/delete-item/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.response);
      return {
        status: false,
        errorMessage: err.response.data.errorMessage,
      };
    });
}
