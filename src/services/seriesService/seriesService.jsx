import axios from 'axios';

const url = "http://localhost:4200/";
const apiEndPoint = "series";

export function getSeries() {
    return axios.get(url + apiEndPoint);
}

export default {
    getSeries
}