import React from "react";
import './Output.css';

function Output({count, character, readingTime, inputText}) {
    
    return (
        <>
            <div className="output">
                <h1>Summary Of Your Text</h1>
                <p>Number of words : {count}</p>
                <p>Number of characters : {character}</p>
                <p>Reading Time: {readingTime}</p>
                <div>
                    <h2>Preview Document</h2>
                    <input type="text" value={inputText}/>
                </div>
            </div>
        </>
    );
}

export default Output;