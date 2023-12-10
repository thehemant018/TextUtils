import React,{useState} from 'react'

export default function TextForm(props) {
    // hook -- text jaha bhi use hoga without loading update ho jayega
        const [text,setText] = useState('')  ;
        // text='jdvdjn'       //wrong way to change state
        //setText('This is new state');       //wrong way to change state

        const handleUpClick=()=>{
            // console.log("Uppercase was clicked" + text);
            let newText=text.toUpperCase()
            setText(newText);
            props.showAlert('Converted to Uppercase','success')
        }
        const handleDwClick=()=>{
            let newText=text.toLowerCase()
            setText(newText);
            props.showAlert('Converted to Lowercase','success')
        }
        const handleTrimClick=()=>{
            let newText=text.trim()
            setText(newText);
            props.showAlert('Whitespaces has been removed from starting','success')
        }
        const handleCopy = () => {
            var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert('Text is Coppied on clipboard','success')
        }

        const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert('Extra spaces removed','success')
        }

        const handleClearClick=()=>{
            let newText=''
            setText(newText);
            props.showAlert('Input field is reset','success')
        }

        const handleOnChange=(event)=>{
            // console.log("Handle on change");
            setText(event.target.value);
            
        }
        
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="15"></textarea>
        </div>
        <div className='container'>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleDwClick}>Convert to Lowecase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
        <button className='btn btn-primary mx-2' onClick={handleTrimClick}>Trim</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Reset</button>
        </div>    
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008*text.split(' ').length} Minutes to read</p>
        <h2>Preview:</h2>
        <p>{text.length>0 ?text:'Enter something in the textbox above to priview it here'}</p>
    </div>
    </>
  )
}
