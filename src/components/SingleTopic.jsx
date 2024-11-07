import { useParams, Link } from "react-router-dom";
import SearchByTopic from "./SearchByTopic";
import ArticleCard from "./ArticleCard";
import { useState, useEffect, useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";
import { fetchArticles, fetchArticlesByTopic } from "../../axios";

export default function SingleTopic ({articles, setArticles}) {

    const { topic_slug } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    const { setArticle } = useContext(ArticleContext)

    useEffect(() => {
        
        const apiCall = !topic_slug || topic_slug === "All"? fetchArticles() : fetchArticlesByTopic(topic_slug);

        apiCall.then(({data})=> {
            setIsLoading(false)
            setArticles(data.articles)
        }).catch(({response}) => {
            setIsLoading(false)
            setErr(response)
        })
    },[topic_slug])

    if (err) {
        return <div>
            <h2>Sorry 🤔 could not load this page...</h2>
            <h3>{err.status} {err.data.msg}</h3>
            <Link to="/topics"><button>Back to topics</button></Link> 
        </div>
    }

    if(isLoading){
        return <h3>Loading articles...</h3>
    }

    return (
        <div id="articles-list-container">
            <SearchByTopic></SearchByTopic>
            <ul id="articles-list">
            {articles.map((item) => {
                return <ArticleCard key={item.article_id} item={item} setArticle={setArticle}></ArticleCard>
            })}
            </ul>
        </div>
    )
}