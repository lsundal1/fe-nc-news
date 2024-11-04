

export default function ArticleCard (props) {

    const { title, article_img_url, author, topic, votes, created_at } = props

    return (
        <div id="article-card">
            <img width="300px"src={article_img_url} alt="article-card-img"></img>
            <div id="article-card-info">
                <h3>{title}</h3>
                <ul>
                    <li>Author: {author}</li>
                    <li>Topic: {topic}</li>
                    <li>Votes: {votes}</li>
                    <li>Date Published: {created_at.split('T')[0]}</li>
                </ul>
            </div>
        </div>
    )
}