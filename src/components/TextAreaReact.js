// import './App.css';
// here we are using the functional components;
// and thus everywhere to use state, we  
import React,{useState} from 'react';
// import {state,useState}=
const onClick=()=>{

}
export default function TextAreaReact(prop) {
    const [text, setText]=useState(prop.value);// array destructuring 
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
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={prop.value}></textarea>
                </div>
            </form>
            <div className="mx-4">
                <button type="button" className="btn btn-primary px-2 mx-2  " onClick={onClick}>Bold </button>
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
        </>
    )
}
//  textAreaReact;