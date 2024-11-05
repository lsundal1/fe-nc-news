import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchArticleById } from '../../axios';
import Comments from './Comments'
import Votes from './Votes';

export default function SingleArticle() {
    
    const [article, setArticle] = useState({})
    const [votes, setVotes] = useState(0)
    const { article_id } = useParams()
    
    useEffect(() => {
        fetchArticleById(article_id)
            .then(({data}) => {     
                setArticle(data.article);
                setVotes(data.article.votes)
            }).catch((err) => {
                console.log(err)
            })
        
    }, [article_id]);
    

    return (
        <div>
            <h1>{article.title}</h1>
            <div id="single-article">
                <img id="single-article-img" src={article.article_img_url}></img>
            <div>
                <p>{article.body}</p>
                <p>Topic: {article.topic}<br/> 
                    Author: {article.author}<br/> 
                    Date Published: {article.created_at}
                </p>
                <Votes article_id={article_id} votes={votes} setVotes={setVotes}></Votes>
            </div>
            </div>
            <Comments article_id={article_id}></Comments>
        </div>
        
    )
}