import React,{useState} from 'react'


export default function States(props) {
    const [text, setText] = useState("");
  
    
    
    function handleUpClick(){
        console.log(("Upper"));
        setText(text.toUpperCase())
        
    }
    function handleDownClick(){
        console.log(("Lower"));
        setText(text.toLowerCase())
        
    }
    function handleClear(){
        console.log(("Clear the text"));
        setText("")
        
    }



    // another way to write func 
    const handleOnChange =  (event) =>{
        console.log("Handle on change");
        setText(event.target.value) 
        
    }
    
  return (
    <>
        <div className="container my-5">
        <h1>{props.heading} and Word Counter</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder='Enter your text'></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>
        <button className="btn btn-primary mx-5" onClick={handleDownClick}>Convert Lowercase</button>
        <button className="btn btn-primary mx-5" onClick={handleClear}>Clear Text</button>
        </div>
        
        
        <div className="container my-4">
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length-1} words and {text.length} Chracters</p>
            <p> {0.008 * text.split(" ").length} Minutes or {0.48 * text.split(" ").length} Seconds to read</p>
        </div>


        <h3> Preview</h3>
        <p>{text}</p>


    

        <a href="https://github.com/NeelBiswas123/"> Follow my github</a>  
    
      
    </>
  )
}
