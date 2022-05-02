import React, {useState} from 'react'



function TextForm(props) {
  const handleUpClick= () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () =>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
  }
  const handClear = () =>{
    let newText = ('');
    setText(newText);
  }

  const handleOnChange= (event) =>{
    console.log("On Chnage");
    setText(event.target.value);
  }

  const [text, setText] = useState(' ');
  
  return (

    <>
    <div className="container" style={{color: props.mode==='dark' ?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark' ?'grey':'white' , color:props.mode === 'dark' ? 'white': '#042743'}} id="myBox" rows="10"></textarea>
            </div>
           <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-1" onClick={handClear}>Clear Text</button>

    </div>

    <div className="container my-3" style={{color :props.mode==='dark' ?'white':'#042743'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} word and {text.length} characters.</p>
      <p>{ 0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

export default TextForm
