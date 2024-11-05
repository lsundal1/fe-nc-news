import { fetchCommentsById } from "../../axios";
import { useState, useEffect } from "react";

export default function Comments (props) {

    const { article_id } = props 

    const [comments, setComments] = useState([])

    useEffect(() => {

        fetchCommentsById(article_id).then(({data}) => {
            setComments(data.comments)
        }).catch((err) => {
            console.log(err)
        })

    },[])


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