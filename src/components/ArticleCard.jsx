import { Link } from "react-router-dom"

export default function ArticleCard (props) {

    const { item } = props

    const url = `/articles/${item.article_id}`
    
    return (
        <div id="article-card">
            <img width="300px"src={item.article_img_url} alt="article-card-img"></img>
            <div id="article-card-info">
                <h3>{item.title}</h3>
                <ul>
                    <li>Author: {item.author}</li>
                    <li>Topic: {item.topic}</li>
                    <li>Votes: {item.votes}</li>
                    <li>Date Published: {item.created_at.split('T')[0]}</li>
                </ul>
                <Link to={url}>Go to article</Link>
            </div>
        </div>
    )
}