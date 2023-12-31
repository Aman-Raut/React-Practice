import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
  }
  const handleClearClick = ()=>{
    console.log("clear was clicked" + text);
    let newText = "";
    setText(newText);
}
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
 
  <textarea className="form-control" id="MyBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
 </div>
 <div className="container my-3">
  <h1>your text summary</h1>
<p> {text.split(" ").length} and {text.length} characters</p>
<p> {0.008*text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text} </p>  
 </div>
 </>
  )
}
