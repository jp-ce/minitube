import axios from "axios";
import { API_KEY } from "./key";

const KEY = API_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 13,
    key: KEY,
  },
});
