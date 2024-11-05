import { postComment } from "../../axios"
import { useState } from "react"

export default function PostComment ({article_id}) {

    const [comment, setComment] = useState({})
    const [isPosted, setIsPosted] = useState(false)

    const handleInput = (e) => {
        e.preventDefault()

        const obj = {
            username: "tickle122",
            body: e.target.value
        }
        console.log(obj)
        setComment(obj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsPosted(true)
        postComment(article_id, comment)
            .then(({data})=> {
                console.log(data)
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

                <label htmlFor="category_name">Have your say: </label><br/>
                <input type='text' onChange={handleInput} id="comment" placeholder="Write a comment..."></input><br/> 

                <input disabled={isPosted} className="submit" type="submit" value="Submit"/>

            </form>
                { isPosted? <p>Congrats! You posted a comment!</p> : null }
        </div>
    )
}