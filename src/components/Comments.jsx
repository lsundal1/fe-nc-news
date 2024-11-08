import { fetchCommentsById } from "../../axios";
import { useState, useEffect } from "react";
import PostComment from './PostComment.jsx'
import DeleteComment from "./DeleteComment.jsx";

export default function Comments ({article_id}) {

    const [comments, setComments] = useState([])
    const [user, setUser] = useState("grumpy19")
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
        <div className="comments">
            <h3>Comments:</h3>
            <PostComment article_id={article_id}></PostComment>
            <ul className="comments" id="comments-list">
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="comments" id="individual-comment">
                        {comment.author}: {comment.body} { comment.author === user?<DeleteComment comment_id={comment.comment_id}></DeleteComment> : null}
                        <hr></hr>
                        </li>
                })}
            </ul>
        </div>
    )
}