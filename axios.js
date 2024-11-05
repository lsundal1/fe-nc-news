import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://be-nc-news-upc8.onrender.com/api",
    timout: 5000,
})

export function fetchArticles () {
    return apiClient.get(`/articles`)
}

export function fetchArticleById (article_id) {
    return apiClient.get(`/articles/${article_id}`)
}

export function fetchCommentsById (article_id) {
    return apiClient.get(`/articles/${article_id}/comments`)
}

export function updateVotes (article_id, obj) {
    return apiClient.patch(`/articles/${article_id}`, obj)
}