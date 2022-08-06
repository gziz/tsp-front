import axios from "axios";

// NODE_ENV #1


// const baseURL = "http://127.0.0.1:5000"
const baseURL = "https://cengange.herokuapp.com"

export default axios.create({
    baseURL,
});

