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

export function getAllItems() {
  return itemService.get("/all-items").then((res) => res.data);
}
