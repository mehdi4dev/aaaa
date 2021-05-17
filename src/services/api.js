import axios from "axios";

const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/characters/"
})
export const ts = "1";
export const apikey = "b748fc2551361fbcc9c044497e4dfa44"
export const hash = "2dfb4c74a13023e163d5bb34dc4e096b"
export default api