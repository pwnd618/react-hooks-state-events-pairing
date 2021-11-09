import React, {useState} from 'react'
import video from '../data/video'

function Comments() {
    const [comments, setComments] = useState('true')
    

    const mappedComments = video.comments.map((obj) => {
        console.log(obj)
        return [<h3>{obj.user}</h3>, <p>{obj.comment}</p>]
    })
    
    function handleClick() {
        setComments(!comments)
    }

    if (comments === true) {
        return (
        <div>
        <button onClick={handleClick}>{comments ? 'Show' : 'Hide'} Comments</button>
        </div>
        )

    }
    return (
        <div>
            <button onClick={handleClick}>{comments ? 'Show' : 'Hide'} Comments</button>
            <hr></hr>
            <container className='comments'>
            <h2>{mappedComments.length} Comments</h2>
            {mappedComments}
            </container>
        </div>
    )
}

export default Comments
