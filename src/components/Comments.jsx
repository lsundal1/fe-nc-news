import { fetchCommentsById } from "../../axios";
import { useState, useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";

export default function Comments () {

    const { article } = useContext(ArticleContext)

    const [comments, setComments] = useState([])

    fetchCommentsById(article.article_id).then(({data}) => {
        setComments(data.comments)
    }).catch((err) => {
        console.log(err)
    })

    return (
        <div id="comments">
            <h3>Comments:</h3>
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id}>{comment.author}: {comment.body}</li>
                })}
            </ul>
        </div>
    )
}