import { useEffect } from "react"
import { fetchArticles } from "../../axios.js"
import ArticleCard from "./ArticleCard.jsx"

export default function Articles (props) {

    const {articles, setArticles} = props

    useEffect(() => {
        fetchArticles().then(({data}) => {
            setArticles(data.articles)
            console.log(articles)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <div id="articles-list">
            <ul >
            {articles.map((article) => {
                return <ArticleCard title={article.title} article_img_url={article.article_img_url} author={article.author} topic={article.topic} votes={article.votes} created_at={article.created_at}></ArticleCard>
            })}
            </ul>
        </div>
    )
}