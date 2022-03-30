// import './App.css';
// here we are using the functional components;
// and thus everywhere to use state, we  
import React,{useState} from 'react';
import WordCount from './WodCount';
// import {state,useState}=

export default function TextAreaReact() {
    const [text, setText]=useState('');// array destructuring 
    const onClickText=(event)=>{
        // console.log('hello');
        setText(event.target.value);
    
    }

    const onClickBold=()=>{
        setText(<>
        <strong>text</strong>
        </>)
    }
    const toLowerCase=()=>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    // text=
    // setText('hey aba yo value chai setText vanne fucntion liyera change gareko');
    

    // useState is an array, so to use the functions of the array we have to destructure this. To destructure this we use
    // array's destructoring 
    // so basically text vanne value le useState bhitra bhako value lai rakhxa
    // ani setText vanne function le chai we can change the value of useState bhitra bhako value




    // like aba setText vanne chai function ho; like pre-defined function jastai ho eslai chai define garne haina
    //components name has to start with capital letter always in react
    return (
        <>
            <form className="m-4">
                <div className="form-group m-2">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text }
                    onChange={onClickText} ></textarea>
                </div>
            </form>
            <div className="mx-4">
                <button type="button" className="btn btn-primary px-2 mx-2  " 
                onClick={toLowerCase}
                >
                    Bold </button>
                {/* first let's focus only on making it bold */}
                {/* <button type="button" className="btn btn-primary px-2 mx-2  ">Italic</button>
                <button type="button" className="btn btn-primary px-2 mx-2  ">Underline</button>
                <button type="button" className="btn btn-primary px-2 mx-2  ">Strikethrough</button>
                <button type="button" className="btn btn-primary px-2 mx-2  ">Copy text</button>
                <button type="button" className="btn btn-primary px-2 mx-2  ">Uppercase</button>
                <button type="button" className="btn btn-primary px-2 mx-2  ">Lowercase</button> */}
            </div>
            <div className='preview m-3'>
                
                
                <h1>{text}</h1>
            </div>
            {/* {setText("hello world")}
                {console.log(text)} */}
            {/* <h1>hello there</h1> */}
            <WordCount text={text}/>
        </>
    )
}
//  textAreaReact;