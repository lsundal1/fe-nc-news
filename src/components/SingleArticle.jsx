import { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { ArticleContext } from '../contexts/ArticleContext';
import { fetchArticleById } from '../../axios';
import Comments from './Comments'

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

    return (
        <div>
            <h1>{article.title}</h1>
            <div id="single-article">
                <img id="single-article-img" src={article.article_img_url}></img>
            <div>
                <p>{article.body}</p>
                <p>Topic: {article.topic}<br/> 
                    Author: {article.author}<br/> 
                    Date Published: {article.created_at}</p>
            </div>
            </div>
            <Comments></Comments>
        </div>
        
    )
}