// import React, { useState } from 'react'
import React  from 'react'

export default function About(props) {
  let myStyle ={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(6 74 104)':'white',
    // border:'2px solid',
    // borderColor:props.mode==='dark'?'white':'#042743',
  }
    // const[myStyle,setMyState]=useState(
    // {
    //     // color:'white',
    //     // backgroundColor:'black'
    //     color:'black',
    //     backgroundColor:'white'
    // })

    // const[btntext,setBtnText]=useState('Enable Dark Mode')

    // const toggleStyle=()=>{
    //     if(myStyle.color==='white'){
    //         setMyState({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyState({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }
  return (
    <div className='container '>
        <h1 className='my-3'style={{color:props.mode==='dark'?'white':'#042743',}}>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
        <strong>Analyze text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Text analysis is the process of using computer systems to read and understand human-written text for business insights. Text analysis software can independently classify, sort, and extract information from text to identify patterns, relationships, sentiments, and other actionable knowledge. You can use text analysis to efficiently and accurately process multiple text-based sources such as emails, documents, social media content, and product reviews, like a human would.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
      <strong>Free to use </strong>
        
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Potential customers may just take a quick glance at your app's description. Breaking up the content by using short paragraphs and lists makes it easier to scan. Adding a list of product features can also help to quickly show what your app does.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
      <strong>Browser compability</strong>
        
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Browser compatibility, often known as cross-browser compatibility, refers to whether or not a website or web application functions as intended in any particular browser version on different devices.</div>
    </div>
  </div>
</div>
    {/* <div className='container my-3'>
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
    </div> */}
    </div>
  )
}
