import axios from 'axios';

const url = "http://localhost:4200/";
const apiEndPoint = "players";

export function addPlayer(player) {
    return axios({
        method: "POST",
        url: url + apiEndPoint,
        data: player
    });
    //return axios.patch(url + apiEndPoint + '/' + teamId + '/' + 'players', { "player": player })
}

export default {
    addPlayer
}