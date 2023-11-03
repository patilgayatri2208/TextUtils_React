import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase" , "success");
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase" , "success");
    }
    const handleClearClick=()=>{
        let newText = ('');
        setText(newText)
        props.showAlert("Text is clear" , "success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
 
    const handleExtraSpaces= () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra spaces from Text" , "success");
    }
    const [text, setText] = useState('Enter test Here');

  return (
    <>
    <div className="container" style= {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary  mx-2 my-1" onClick={handleUpClick} >Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary  mx-2 my-1" onClick={handleLowClick} >Convert To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary  mx-2 my-1" onClick={handleClearClick} >Clear</button>
        <button disabled={text.length===0} className="btn btn-primary  mx-2 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and  {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthimng in the textbox to preview here"}</p>
    </div>
    </>
  )
}
