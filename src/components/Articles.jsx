import { useEffect, useContext, useState } from "react"
import { fetchArticles } from "../../axios.js"
import { ArticleContext } from "../contexts/ArticleContext.jsx"
import { useSearchParams } from "react-router-dom"
import ArticleCard from "./ArticleCard.jsx"
import SortBy from "./SortBy.jsx"

export default function Articles ({ articles, setArticles }) {

    const { setArticle } = useContext(ArticleContext)
    const [isLoading, setIsLoading] = useState(true)
    const [isErr, setIsErr] = useState(false)
    
    const [searchParams, setSearchParams] = useSearchParams();
    const orderQuery = searchParams.get("order");
    const sortByQuery = searchParams.get("sort_by");

    const setSortBy = (columnName) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("sort_by", columnName);
        setSearchParams(newParams);
    };

    const setOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("order", direction);
        setSearchParams(newParams);
    };

    const searchQuery = searchParams.toString()

    useEffect(() => {
            fetchArticles(searchQuery).then(({data}) => {
                setIsLoading(false)
                setIsErr(false)
                setArticles(data.articles)
            }).catch((err) => {
                setIsLoading(false)
                setIsErr(true)
                console.log(err)
            }) 
    },[sortByQuery, orderQuery])

    
    if(isErr) {
        return <h3>Oh no! an error... 😬</h3>
    }

    if(isLoading){
        return <h3>Loading articles...</h3>
    }

    return (
        <div id="articles-list-container">
            <div>
                <SortBy setOrder={setOrder} setSortBy={setSortBy}></SortBy>
            </div>
            <ul id="articles-list">
            {articles.map((item) => {
                return <ArticleCard key={item.article_id} item={item} setArticle={setArticle}></ArticleCard>
            })}
            </ul>
        </div>
    )
}