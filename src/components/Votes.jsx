import { updateVotes } from "../../axios";
import { useState } from "react";

export default function Votes ({article_id, votes, setVotes}) {

    const [error, setError] = useState(null);

    function handleMinus () {
        setVotes((currVotes) => currVotes -1);
        updateVotes(article_id, {inc_votes: -1}).then(() => {
        })
        .catch((err) => {
            setLikesCount((currentLikesCount) => currentLikesCount + 1);
            setError("Your like was not successful. Please try again!")
        })
    }

    const handlePlus = () => {
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
            <button className="likes" id="like-minus" onClick={handleMinus}>-</button>

            <p className="likes" id="likes-text">Likes: {votes}</p>
            <button className="likes" id="like-minus" onClick={handlePlus}>+</button>

            {error ? <p>{error}</p> : null}
        </div>
    )
}