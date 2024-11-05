import { fetchCommentsById } from "../../axios";
import { useState, useEffect } from "react";
import PostComment from './PostComment.jsx'
import DeleteComment from "./DeleteComment.jsx";

export default function Comments ({article_id}) {

    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState(null)

    useEffect(() => {

        fetchCommentsById(article_id).then(({data}) => {
            setComments(data.comments)
        }).catch((err) => {
            console.log(err)
        })

    },[comments])

    return (
        <div id="comments">
            <h3>Comments:</h3>
            <PostComment article_id={article_id} setAuthor={setAuthor}></PostComment>
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id}>
                        {comment.author}: {comment.body} { comment.author === author?<DeleteComment comment_id={comment.comment_id}></DeleteComment> : null}
                        </li>
                })}
            </ul>
        </div>
    )
}