import React,{useState} from "react";

export default function TextForm(){
    const clearArea=()=>{
        setText("");
    }
    const eve=(event)=>{
        setText(event.target.value);
    }
    const clickHandler=()=>{
        // setText(event.target.value);
        let newer=text.toUpperCase();
        setText(newer);
    }
    const clickLower=()=>{
        let newer=text.toLowerCase();
        setText(newer);
    }
    const [text,setText]=useState("Enter Your Text");
    return(
        <>
            <div className="mb-3">
            <label htmlFor="mybox" className="form-label"><h1>Write Your Text Here.</h1></label>
            <textarea className="form-control" id="mybox" value={text} onChange={eve} onClick={clearArea} rows="8"></textarea>
            </div>
            <button type="button" class="btn btn-primary" onClick={clickHandler}>ToUpperCase</button>
            <button type="button" class="btn btn-primary mx-4" onClick={clickLower}>ToLowerCase</button>
            <p my-4>{text.split(" ").length} words and {text.length} Characters</p>
        </>
    );
}
