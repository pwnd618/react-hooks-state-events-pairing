import React from 'react'
import ButtonsNShit from './ButtonsNShit'

function Video(props) {
    // console.log(props)

    return (
        <div className="App">
            <iframe
            width="919"
            height="525"
            src={props.src}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{props.title}</h1>
            <p>{props.views} Views | Uploaded {props.createdAt}</p>
            <ButtonsNShit />
        </div>
    )
}

export default Video
