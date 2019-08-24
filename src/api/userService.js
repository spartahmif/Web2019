import Axios from "axios";

const userApi = Axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

const login = (nim, password) => {
  return userApi.post("/api/v1/rest-auth/login/", {
    nim: nim,
    password: password
  });
};

export const userService = {
  login
};
