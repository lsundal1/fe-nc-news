import { postComment } from "../../axios"
import { useState } from "react"

export default function PostComment ({article_id, setPostedComment}) {

    // const [req, setReq] = useState({})
    const [isPosted, setIsPosted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isErr, setIsErr] = useState(false)
    const [inputVal, setInputVal] = useState("")

    const handleInput = (e) => {
        e.preventDefault()
        setInputVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setIsPosted(true)
        setInputVal("")
        postComment(article_id, { username: "grumpy19", body: e.target.value })
            .then(({data})=> {
                setIsLoading(false)
                setPostedComment(data.newComment)
            })
            .catch((err) => {
                setIsLoading(false)
                setIsErr(true)
                console.log(err)
            })

        setTimeout(() => {
            setIsPosted(false)
        }, 3000)
    }

    const value = isLoading? "Posting comment..." : "Submit"

    if (isErr) {
        return <p>Sorry... couldn't post comment 😬</p>
    }

    return (
        <div>
            <form id="comment-form" onSubmit={handleSubmit}>

                <label htmlFor="comment">Have your say: </label><br/>
                <input type='text' value={inputVal} onChange={handleInput} id="comment" placeholder="Write a comment..."></input><br/> 
                <input disabled={isPosted} className="submit" type="submit" value={value}/>
            </form>
                { isPosted? <p>Congrats! You posted a comment!</p> : null }
        </div>
    )
}