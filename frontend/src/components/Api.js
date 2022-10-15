import axios from "axios";

const API =  axios.create({
    baseURL: 'http://chere.com.br/'
});

export default API