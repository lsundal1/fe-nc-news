import { useState } from "react";
import { deleteComment } from "../../axios";

export default function DeleteComment ({comment_id}) {

    const [deleted, setDeleted] = useState(false)

    function handleDelete () {

        setDeleted(true)
        deleteComment(comment_id).then(() => {
        })
        .catch((err) => {
            console.log(err)
        })

        setTimeout(() => {
            setDeleted(false)
        }, 3000)
    }

    return (
        <button id="delete" disabled={deleted} onClick={handleDelete}>Delete</button>
    )
}