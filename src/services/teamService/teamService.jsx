import axios from 'axios';

const url = "http://localhost:4200/";
const apiEndPoint = "teams";

export function getTeams() {
    return axios.get(url + apiEndPoint);
}

export default {
    getTeams
}