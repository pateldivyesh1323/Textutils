import React ,{useState} from "react";

export default function TextForm(props) {
    let [text,setText] = useState("");

    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        props.showAlert("Converted to UpperCase","success");
        setText(newText);
    }
    
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    
    const handleClearClick=()=>{
        setText("");
        props.showAlert("Text Cleared","success");
    }
    
    const copyText=()=>{
        let copy =  document.getElementById("myBox");
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Text copied to Clipboard","success");
    }
    
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea placeholder="Enter text here" className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick} >Convert to Lower Case</button>
            <button className="btn btn-primary" onClick={copyText} >Copy</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick} >Clear</button>
        </div>
        <div className="container my-2">
            <h2>Your Text Summary : </h2>
            <p>{text.split(/\s+\n/).filter((element)=>{return element.length!==0;}).length} Words and {text.length} Characters</p>
            <p>Average time to read the text will be {text.length > 0 ? 0.008*text.split(/\s+\n/).length : 0} Minutes</p>
            <p>No of Sentences : {(text.split(".").length)-1 }</p>
            <h2>Preview : </h2>
            <p>{(text.length > 0 )? text : "Enter in the textbox above to preview it here."}</p>
        </div>
        </>
    )
}