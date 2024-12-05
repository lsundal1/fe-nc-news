import { fetchCommentsById } from "../../axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import PostComment from './PostComment.jsx'
import DeleteComment from "./DeleteComment.jsx";

export default function Comments ({article_id}) {

    const [comments, setComments] = useState([])
    const { user } = useContext(UserContext)
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
        <div className="comments" style={{marginTop: "2em"}}>
            <PostComment article_id={article_id}></PostComment>
            <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Comment</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {comments.map((comment)=> {
                    return <tr key={comment.comment_id}>
                        <td>{comment.author}</td>
                    <td>{comment.body}</td>
                    <td>{ comment.author === user.username?<DeleteComment comment_id={comment.comment_id}></DeleteComment> : null}</td>
                </tr>
                })}
                </tbody>
            </table>
            </div>
        </div>
    )
}