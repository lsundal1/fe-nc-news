import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://be-nc-news-upc8.onrender.com/api",
    timout: 5000,
})

export function fetchArticles (obj) {
    return apiClient.get(`/articles`, {params: obj})
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

export function postComment (article_id, obj) {
    return apiClient.post(`/articles/${article_id}/comments`, obj)
}

export function deleteComment (comment_id) {
    return apiClient.delete(`/comments/${comment_id}`)
}

export function fetchTopics () {
    return apiClient.get(`/topics`)
}

export function fetchUsers () {
    return apiClient.get('/users')
}