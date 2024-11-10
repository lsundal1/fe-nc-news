import { postComment } from "../../axios"
import { useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function PostComment ({article_id}) {

    const { user } = useContext(UserContext)
    const [isPosted, setIsPosted] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isErr, setIsErr] = useState(false)
    const [inputVal, setInputVal] = useState("")
    const [request, setRequest] = useState({})

    const handleInput = (e) => {
        e.preventDefault()
        setInputVal(e.target.value)
        setRequest({ username: user.username, body: e.target.value})
        e.target.value.length > 0? setIsDisabled(false) : setIsDisabled(true)
        console.log(isDisabled)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setIsPosted(true)
    
        postComment(article_id, request)
            .then(({data})=> {
                setIsLoading(false)
                setInputVal("")
                console.log(data)
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
        setTimeout(() => {
            setIsErr(false)
        },3000)
        return <p>Sorry... couldn't post comment 😬</p>
    }

    return (
        <div className="post-comment" id="post-a-comment">
            <form className="post-comment" id="comment-form" onSubmit={handleSubmit}>
                <input className="post-comment" type='text' value={inputVal} onChange={handleInput} id="comment" placeholder="Write a comment..." required></input><br/> 
                <input className="post-comment" type="submit" value={value} />
            </form>
                { isPosted? "Congrats! You posted a comment!" : null }
        </div>
    )
}