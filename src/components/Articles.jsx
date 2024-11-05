import { useEffect, useContext, useState } from "react"
import { fetchArticles } from "../../axios.js"
import ArticleCard from "./ArticleCard.jsx"
import { ArticleContext } from "../contexts/ArticleContext.jsx"

export default function Articles (props) {

    const { articles, setArticles } = props
    const { setArticle } = useContext(ArticleContext)
    const [isLoading, setIsLoading] = useState(true)
    const [isErr, setIsErr] = useState(false)

    useEffect(() => {
        fetchArticles().then(({data}) => {
            setIsLoading(false)
            setArticles(data.articles)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsErr(true)
            console.log(err)
        })
    },[])

    if(isErr) {
        return <h3>Oh no! an error... 😬</h3>
    }

    if(isLoading){
        return <h3>Loading articles...</h3>
    }


    return (
        <div id="articles-list-container">
            <ul id="articles-list">
            {articles.map((item) => {
                return <ArticleCard key={item.article_id} item={item} setArticle={setArticle}></ArticleCard>
            })}
            </ul>
        </div>
    )
}