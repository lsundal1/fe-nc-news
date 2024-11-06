import { useParams } from "react-router-dom";
import SearchByTopic from "./SearchByTopic";
import ArticleCard from "./ArticleCard";
import { useState, useEffect, useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";
import { fetchArticles, fetchArticlesByTopic } from "../../axios";

export default function SingleTopic ({articles, setArticles}) {

    const { topic_slug } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [isErr, setIsErr] = useState(false)
    const { setArticle } = useContext(ArticleContext)

    useEffect(() => {
        
        const apiCall = !topic_slug || topic_slug === "All"? fetchArticles() : fetchArticlesByTopic(topic_slug);

        apiCall.then(({data})=> {
            setIsLoading(false)
            setIsErr(false)
            setArticles(data.articles)
        }).catch((err) => {
            setIsLoading(false)
            setIsErr(true)
            console.log(err)
        })
    },[topic_slug])

    if(isErr) {
        return <h3>Oh no! an error... 😬</h3>
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