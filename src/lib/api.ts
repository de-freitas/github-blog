import axios from "axios";

const baseURL = `https://api.github.com`;

export const api = axios.create({ baseURL });
