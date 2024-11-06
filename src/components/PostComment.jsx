import { postComment } from "../../axios"
import { useState } from "react"

export default function PostComment ({article_id, setAuthor}) {

    const [comment, setComment] = useState({})
    const [isPosted, setIsPosted] = useState(false)

    const handleInput = (e) => {
        e.preventDefault()

        const obj = {
            username: "grumpy19",
            body: e.target.value
        }
        setComment(obj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(false)
        setIsPosted(true)
        setAuthor("grumpy19")
        postComment(article_id, comment)
            .then(({data})=> {
            })
            .catch((err) => {
                console.log(err)
            })

        setTimeout(() => {
            setIsPosted(false)
        }, 3000)
    }

    return (
        <div>
            <form id="comment-form" onSubmit={handleSubmit}>

                <label htmlFor="comment">Have your say: </label><br/>
                <input type='text' onChange={handleInput} id="comment" placeholder="Write a comment..."></input><br/> 

                <input disabled={isPosted} className="submit" type="submit" value="Submit"/>

            </form>
                { isPosted? <p>Congrats! You posted a comment!</p> : null }
        </div>
    )
}