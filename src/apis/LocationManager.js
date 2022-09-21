import axios from "axios";

// const baseURL = "http://127.0.0.1:5000"
const baseURL = "https://cengange.herokuapp.com"

export default axios.create({
    baseURL,
});

