import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase clicked")
        let newText = text.toUpperCase()
        settext(newText)
    }
    const handleOnChange = (event) => {
        console.log("onChange")
        settext(event.target.value)
    }
    const [text, settext] = useState("enter text here")
  return (
    <div>
          <h1>{props.heading}</h1>
        <div className="mb-3">
        
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn.btn-primary" onClick={handleUpClick}>convert to upper case</button>
          <h1>TEXT SUMMARY</h1>
          <p>{text.split(" ").length}words and {text.length} characters</p>
    </div>
  )
}
