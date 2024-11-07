import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { fetchArticleById } from '../../axios';
import Comments from './Comments'
import Votes from './Votes';

export default function SingleArticle() {
    
    const [article, setArticle] = useState({})
    const [votes, setVotes] = useState(0)
    const [err, setErr] = useState(null)
    const [isLoading, setIsLoading] = useState({})
    const { article_id } = useParams()
    
    useEffect(() => {
        fetchArticleById(article_id)
            .then(({data}) => {    
                setIsLoading(false) 
                setArticle(data.article);
                setVotes(data.article.votes)
            })
            .catch(({response}) => {
                setIsLoading(false)
                setErr(response)
                console.log(response)
            })
        
    }, [article_id]);


    if (err) {
        return <div>
            <h2>Sorry 🤔 could not load this page...</h2>
            <h3>{err.status} {err.data.msg}</h3>
            <Link to="/articles"><button>Back to articles</button></Link> 
        </div>
    }

    console.log(err)

    if (isLoading) {
        return <h3>Loading article...</h3>
    }
    
    
    return (
        <div>
            <h1>{article.title}</h1>
            <div id="single-article">
                <img id="single-article-img" src={article.article_img_url}></img>
            <div>
                <p>{article.body}</p>
                <p>Topic: {article.topic}<br/> 
                    Author: {article.author}<br/> 
                    Date Published: {article.created_at? article.created_at.split('T')[0]: null}
                </p>
                <Votes article_id={article_id} votes={votes} setVotes={setVotes}></Votes>
            </div>
            </div>
            <Comments article_id={article_id}></Comments>
        </div>
        
    )
}