import axios from "axios";

const KEY = "AIzaSyC-lwxjNFeH_nqALbUbBGwGf-xk9Ta2eLs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
