import { updateVotes } from "../../axios";
import { useState } from "react";

export default function Votes ({article_id, votes, setVotes}) {

    const [error, setError] = useState(null);

    function handleMinus () {
        setVotes((currVotes) => currVotes -1);
        updateVotes(article_id, {inc_votes: -1}).then(() => {
            console.log(-1)
        })
        .catch((err) => {
            setLikesCount((currentLikesCount) => currentLikesCount + 1);
            setError("Your like was not successful. Please try again!")
        })
    }

    const handlePlus = () => {
        setVotes((currVotes) => currVotes +1);
        updateVotes(article_id, {inc_votes: 1}).then(() => {
            console.log(+1)
        })
        .catch((err) => {
            setLikesCount((currentLikesCount) => currentLikesCount - 1);
            setError("Your like was not successful. Please try again!")
        })
    } 

    return (
        <div id="likes">
            <button onClick={handleMinus}>-</button><h3>Likes: {votes}</h3><button onClick={handlePlus}>+</button>
            {error ? <p>{error}</p> : null}
        </div>
    )
}