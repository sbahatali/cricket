import axios from "axios";

const url = "http://localhost:4200/";
const apiEndPoint = "news";
export function getNews() {
    return axios.get(url + apiEndPoint);
}