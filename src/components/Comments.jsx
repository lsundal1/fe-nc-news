import { fetchCommentsById } from "../../axios";
import { useState, useEffect } from "react";
import PostComment from './PostComment.jsx'

export default function Comments ({article_id}) {

    const [comments, setComments] = useState([])

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
            <PostComment article_id={article_id}></PostComment>
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id}>{comment.author}: {comment.body}</li>
                })}
            </ul>
        </div>
    )
}