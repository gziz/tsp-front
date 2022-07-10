import axios from "axios";

// NODE_ENV #1


//const baseURL = "http://127.0.0.1:5000"
const baseURL = process.env.BACK_URL

export default axios.create({
    baseURL,
});