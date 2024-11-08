import { useEffect, useContext, useState } from "react"
import { fetchArticles } from "../../axios.js"
import { ArticleContext } from "../contexts/ArticleContext.jsx"
import { useSearchParams } from "react-router-dom"
import ArticleCard from "./ArticleCard.jsx"
import SortBy from "./SortBy.jsx"

export default function Articles ({ articles, setArticles }) {

    const { setArticle } = useContext(ArticleContext)
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    
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

    useEffect(() => {
            fetchArticles(searchParams).then(({data}) => {
                setIsLoading(false)
                setArticles(data.articles)
            }).catch((err) => {
                setIsLoading(false)
                setErr(err.message)
            }) 
    },[sortByQuery, orderQuery])

    return (
        <div className="main">
        { err? 
            <div>
                <h3>Sorry 🫤 we're having a problem...</h3>
                <p>{err}</p>
            </div> : 
        isLoading? 
            <h3>Loading articles...</h3> : 
            <div className="articles" id="articles-list">
                <SortBy setOrder={setOrder} setSortBy={setSortBy}></SortBy>
                <ul className="articles" id="articles-list">
                    {articles.map((item) => {
                        return <ArticleCard key={item.article_id} item={item} setArticle={setArticle}></ArticleCard>
                    })}
                </ul>
            </div> }
        </div>
    )
}