import './Input.css'
import React from 'react'
import Button from './Buttons/Button'

function Input({setInputText, inputText}) {
  
  return (
    <>
      <div className="Input">
        <h1 className="heading">
            TextUtils - Word Counter, Character Counter, Remove Extra Space
        </h1>
        <p>Enter Text Here...</p>
        <div className="IP">
          <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} />
        </div>
        <div className="button">
            <Button text="Uppercase" color="green" fun="uppercase" inputText={inputText} setInputText={setInputText} />
            <Button text="Lowercase" color="blue" fun="lowercase" inputText={inputText} setInputText={setInputText} />
            <Button text="Clear Text" color="red" fun="clear" inputText={inputText} setInputText={setInputText} />
            <Button text="Copy to Clipboard" color="brown" fun="copy" inputText={inputText} setInputText={setInputText} />
            <Button text="Remove Extra Spaces" color="indigo" fun="remove" inputText={inputText} setInputText={setInputText} />
        </div>
      </div>
    </>
  )
}

export default Input
