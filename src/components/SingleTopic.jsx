import ArticleCard from "./ArticleCard";
import SearchByTopic from "./SearchByTopic"
import { useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";
import { fetchArticles, fetchArticlesByTopic } from "../../axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


export default function SingleTopic ({articles, setArticles}) {

    const { setArticle } = useContext(ArticleContext)
    const { topic_slug } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        
        const apiCall = !topic_slug || topic_slug === "All"? fetchArticles() : fetchArticlesByTopic(topic_slug);

        apiCall.then(({data})=> {
            setIsLoading(false)
            setArticles(data.articles)
        }).catch(({response}) => {
            setIsLoading(false)
            setErr(response)
        })
        console.log(topic_slug)
    },[topic_slug])

    return (
        <div className="main">
            {err? 
            <div>
                <h2>Sorry 🤔 could not load this page...</h2>
                <h3>{err.status} {err.data.msg}</h3>
                <Link to="/topics"><button>Back to topics</button></Link> 
            </div> : isLoading? 
            <h3>Loading articles...</h3> : <div>
                <div id="topics-list">
                <SearchByTopic articles={articles} setArticles={setArticles}></SearchByTopic>
                <ul id="articles-list">
                {articles.map((item) => {
                    return <ArticleCard key={item.article_id} item={item} setArticle={setArticle}></ArticleCard>
                })}
                </ul>
                </div>
            </div>}
        </div>
    )
}