import { useEffect, useContext, useState } from "react"
import { fetchArticles, fetchArticlesByTopic } from "../../axios.js"
import ArticleCard from "./ArticleCard.jsx"
import { ArticleContext } from "../contexts/ArticleContext.jsx"
import SearchByTopic from "./SearchByTopic.jsx"

export default function Articles ({ articles, setArticles, topic_slug }) {

    const { setArticle } = useContext(ArticleContext)
    const [isLoading, setIsLoading] = useState(true)
    const [isErr, setIsErr] = useState(false)

    useEffect(() => {
        topic_slug === "All" || !topic_slug? 
            fetchArticles().then(({data}) => {
                setIsLoading(false)
                setIsErr(false)
                setArticles(data.articles)
            }).catch((err) => {
                setIsLoading(false)
                setIsErr(true)
                console.log(err)
            }) : fetchArticlesByTopic(topic_slug).then(({data})=> {
                setIsLoading(false)
                setIsErr(false)
                setArticles(data.articles)
            }).catch((err) => {
                setIsLoading(false)
                setIsErr(true)
                console.log(err)
            })
    },[topic_slug])

    console.log(topic_slug)


    if(isErr) {
        return <h3>Oh no! an error... 😬</h3>
    }

    if(isLoading){
        return <h3>Loading articles...</h3>
    }

    return (
        <div id="articles-list-container">
            <SearchByTopic topic_slug={topic_slug}></SearchByTopic>
            <ul id="articles-list">
            {articles.map((item) => {
                return <ArticleCard key={item.article_id} item={item} setArticle={setArticle}></ArticleCard>
            })}
            </ul>
        </div>
    )
}