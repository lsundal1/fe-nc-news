import { useState } from "react";
import { deleteComment } from "../../axios";

export default function DeleteComment ({comment_id}) {

    const [isLoading, setIsLoading] = useState(false)
    const [isErr, setIsErr] = useState(false)


    function handleDelete () {
        setIsLoading(true)
        deleteComment(comment_id).then(() => {
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsErr(true)
            console.log(err)
        })

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    if (isErr) {
        return <p>Sorry... couldn't delete comment 😬</p>
    }

    return <button className="btn btn-xs btn-outline" disabled={isLoading} onClick={handleDelete}>{ !isLoading? 'Delete': 'Deleting...' }</button>
    
}