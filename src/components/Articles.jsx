import { useEffect, useContext } from "react"
import { fetchArticles } from "../../axios.js"
import ArticleCard from "./ArticleCard.jsx"
import { ArticleContext } from "../contexts/ArticleContext.jsx"

export default function Articles (props) {

    const {articles, setArticles} = props
    const { article, setArticle } = useContext(ArticleContext)
    console.log(article)

    useEffect(() => {
        fetchArticles().then(({data}) => {
            setArticles(data.articles)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <div id="articles-list">
            <ul>
            {articles.map((item) => {
                return <ArticleCard key={item.article_id} item={item} setArticle={setArticle}></ArticleCard>
            })}
            </ul>
        </div>
    )
}