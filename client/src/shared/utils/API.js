// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "https://mjbcrib-backend.herokuapp.com/",
  responseType: "json"
});