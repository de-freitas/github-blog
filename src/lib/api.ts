import axios from "axios";

const baseURL = `https://api.github.com/users`;

export const api = axios.create({ baseURL });
