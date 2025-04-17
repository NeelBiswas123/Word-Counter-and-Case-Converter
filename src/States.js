import React,{useState} from 'react'


export default function States(props) {
    const [text, setText] = useState("");
    const[darkMode,setDarkMode] = useState({backgroundColor: "white",
                color :"black"
            })
  
    const[modename,setModename] = useState("Dark")

    
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
    
    const ToggleDarkMode = () =>{
            // console.log(darkMode);
            if(darkMode.backgroundColor === "white"){
                setDarkMode({ backgroundColor : "black",
                            color : "white"    }) 
                document.body.style.backgroundColor = "black"

                setModename("Light")
            }
            else{
                setDarkMode({ backgroundColor : "white",
                            color : "black"    }) 
                document.body.style.backgroundColor = "white"

                setModename("Dark")
            }
        }          


  return (
    <>
    <div style={darkMode}>

           
            <button onClick={ToggleDarkMode}> {modename} Mode</button>


        <div className="container my-5" >
        <h1>{props.heading} and Word Counter</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder='Enter your text'></textarea>
        </div>

        <button  onClick={handleUpClick}>Convert Uppercase</button>
        <button  onClick={handleDownClick}>Convert Lowercase</button>
        <button  onClick={handleClear}>Clear Text</button>
        </div>
        
        
        <div className="container my-4">
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length-1} words and {text.length} Chracters</p>
            <p> {0.008 * text.split(" ").length} Minutes or {0.48 * text.split(" ").length} Seconds to read</p>
        </div>


        <h3> Preview</h3>
        <p>{text}</p>


    

        <a href="https://github.com/NeelBiswas123/"> Follow my github</a>  
    
    </div>
      
    </>
  )
}
