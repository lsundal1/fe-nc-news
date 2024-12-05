import { updateVotes } from "../../axios";
import { useState } from "react";

export default function Votes ({article_id, votes, setVotes}) {

    const [error, setError] = useState(null);
    const [isLiked, setIsLiked] = useState(false)

    function handleMinus () {
        setIsLiked(false)
        setVotes((currVotes) => currVotes -1);
        updateVotes(article_id, {inc_votes: -1}).then(() => {
        })
        .catch((err) => {
            setLikesCount((currentLikesCount) => currentLikesCount + 1);
            setError("Your like was not successful. Please try again!")
        })
    }

    const handlePlus = () => {
        setIsLiked(true)
        setVotes((currVotes) => currVotes +1);
        updateVotes(article_id, {inc_votes: 1}).then(() => {
        })
        .catch((err) => {
            setLikesCount((currentLikesCount) => currentLikesCount - 1);
            setError("Your like was not successful. Please try again!")
        })
    } 

    return (
        <div className="likes" id="likes-container">

            <p className="likes" id="likes-text">Likes: {votes}</p>

            {isLiked? <button className="btn m-1" id="unlike"onClick={handleMinus}><p>unlike</p></button>:<button className="btn m-1" id="unlike" onClick={handlePlus}><p>like</p></button>}

            {error ? <p>{error}</p> : null}
        </div>
    )
}