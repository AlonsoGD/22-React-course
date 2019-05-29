import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2ec43808b55586b53900fc7422f999a8edc7b25fb36436353a5f937de9eccd08"
  }
});
