import { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { ArticleContext } from '../contexts/ArticleContext';
import { fetchArticleById } from '../../axios';

export default function SingleArticle() {
    
    const { article, setArticle } = useContext(ArticleContext)
    const { article_id } = useParams()

    console.log(article)
    
    useEffect(() => {
        fetchArticleById(article_id)
        .then(({data}) => {     
        setArticle(data.article);
    });
    }, [article_id]);

    const date = article.created_at.split('T')[0]

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.article_img_url}></img>
            <p>Topic: {article.topic}<br/> 
                Author: {article.author}<br/> 
                Date Published: {date}</p>
            <p>{article.body}</p>
        </div>
        
    )
}