import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://be-nc-news-upc8.onrender.com/api",
    timout: 5000,
})

export function fetchArticles () {
    return apiClient.get(`/articles`)
}