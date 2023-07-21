import axios from "axios";

// Set the base URL for all API requests
axios.defaults.baseURL = "/api";

//GET all fonts
export const getAllFonts = () => {
  return axios
    .get("/fonts")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//GET all users
export const getAllUsers = () => {
  return axios
    .get("/users")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//GET all categories
export const getAllCategories = () => {
  return axios
    .get("/categories")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//GET font by Id
export const getFontById = (id) => {
  return axios
    .get(`/fonts/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//POST User Register
export const postUserRegister = (form) => {
  return axios
    .post("/users/register", form)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//POST User Login
export const postUserLogin = (form) => {
  return axios
  .post("/users/login", form)
  .then((res) => {
    return res.data;
  })
  .catch((error) => {
    return Promise.reject(error.response.data);
  });
};

//POST New font
export const postNewFont = (formWithFile) => {
  return axios
    .post("fonts/newfont", formWithFile)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};