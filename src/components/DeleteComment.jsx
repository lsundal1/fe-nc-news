import { deleteComment } from "../../axios";

export default function DeleteComment ({comment_id}) {

    function handleDelete () {
        deleteComment(comment_id).then(() => {
            console.log('comment deleted')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <button id="delete" onClick={handleDelete}>Delete</button>
    )
}