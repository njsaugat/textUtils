import React from 'react';

export default function WordCount(props){
    return (
        <>
        <div>
            No of words: {props.text.split(" ").length}
        </div>
        </>
    )

}