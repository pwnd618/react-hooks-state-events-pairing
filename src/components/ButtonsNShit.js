import React, {useState} from 'react'
import Comments from './Comments'

function ButtonsNShit() {
    const [likes, setLikes] = useState(9210)
    const [dislikes, setDislikes] = useState(185)

    function handleLikes() {
        setLikes(likes + 1)
    }
    

    
    function handleDislikes() {
        setDislikes(dislikes + 1)

    }
    return (
        <div>
            <button onClick={handleLikes}>{likes}👍</button>
            <button onClick={handleDislikes}>{dislikes}👎</button>
            
            <Comments />
        </div>
    )
}

export default ButtonsNShit
