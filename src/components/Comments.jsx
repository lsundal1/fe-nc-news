import { fetchCommentsById } from "../../axios";
import { useState, useEffect } from "react";
import PostComment from './PostComment.jsx'
import DeleteComment from "./DeleteComment.jsx";

export default function Comments ({article_id}) {

    const [comments, setComments] = useState([])
    const [postedComment, setPostedComment] = useState({})
    const [err, setErr] = useState(null)
    

    useEffect(() => {

        fetchCommentsById(article_id).then(({data}) => {
            setComments(data.comments)
        }).catch((err) => {
            setErr(err.message)
            console.log(err)
        })

    },[comments])

    if (err) {
        return <div>
            <h3>Sorry 😬 could not load comments...</h3>
            <p>{err}</p>
        </div>
    }

    return (
        <div id="comments">
            <h3>Comments:</h3>
            <PostComment article_id={article_id} setPostedComment={setPostedComment}></PostComment>
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id}>
                        {comment.author}: {comment.body} { comment.author === postedComment.author?<DeleteComment comment_id={comment.comment_id}></DeleteComment> : null}
                        </li>
                })}
            </ul>
        </div>
    )
}