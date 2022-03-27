import React from 'react';
import {useState} from 'react'
function Counter(props){
    const [counter,setCounter]=useState(parseInt(props.value))
    console.log(typeof(counter));
    console.log(setCounter);
    // setCounter(counter++);
    console.log(typeof(props.value));
    // const setter=()=>{
    //     counter=counter+1;
    // }
    // setCounter(()=>{counter=counter+1;});
    // setCounter(setter);
    return (
        <div className='container'>
        <button className='mx-2' onClick={()=>setCounter(counter-1)}>-</button>
        {/* biggest mistake i used to do was setCounter(counter=counter-1);
        like setCounter le affaile set garne ho; so no need to set counter by myself
        and the other thing is setCounter is a function; so it needs an argument and argument don't have = sign */}
        <span>{counter}</span>
        <button className='mx-2'onClick={()=>setCounter(counter+1)}>+</button>
        {/* onClick is a shortcut to .addEventListener in JS;
        it does the same functionality; but is easier
        there
        const ele=document.querySelector('.button');ele.addEventListener('click',()=>{console.log('hello')}) */}
        </div>
    )

}

export default Counter