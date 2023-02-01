import axios from "axios";

const instance = axios.create({
  baseURL: "https://mytinderapp-backend.herokuapp.com/",
});

export default instance;
