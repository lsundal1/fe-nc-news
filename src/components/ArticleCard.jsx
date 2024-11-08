import { Link } from "react-router-dom"

export default function ArticleCard ({item}) {

    const url = `/articles/${item.article_id}`
    
    return (
        <div className="article-card">
            <img className="article-card" id="article-card-img" src={item.article_img_url} alt="article-card-img"></img> 
            <Link to={url}><h3>{item.title}</h3></Link>
            <ul>
                <li>Author: {item.author}   |   Date Published: {item.created_at.split('T')[0]} |   Topic: {item.topic}</li>
                <li>Votes: {item.votes}</li>
            </ul>
        </div>
    )
}