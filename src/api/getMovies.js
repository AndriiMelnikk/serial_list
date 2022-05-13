import axios from "axios";

const url = "https://api.tvmaze.com/schedule?date="

export const getMovies = (date) => {
    return axios.get(`${url}${date}`).then(res => {
        return res.data
    })
}