import { Link } from "react-router-dom"

export default function ArticleCard ({item}) {

    const url = `/articles/${item.article_id}`
    
    return (
        <div className="card bg-base-100 max-w-md shadow-xl m-2">
            <figure>
                <img
                src={item.article_img_url}
                alt="article-img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><Link to={url}>{item.title}</Link></h2>
                <p>{item.author} | {item.created_at.split('T')[0]}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}