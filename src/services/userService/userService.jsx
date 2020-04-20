import axios from 'axios';

const url = "http://localhost:4200/";
const apiEndPoint = "users";

export function register(user) {
    return axios.post(url + apiEndPoint, user);
}

export function login(username, password) {
    return axios.get(url + apiEndPoint + '?username=' + username + '&password=' + password);
}

export default {
    register,
    login
}