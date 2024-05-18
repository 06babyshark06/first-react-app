import { useEffect, useState } from "react";

const WordCounter = () => {
    const [count,setCount]=useState(0);
    useEffect(() => {
        const timer = setInterval(()=>{
            let str=document.querySelector('textarea').value;
            setCount(()=>str.trim().split(' ').length);
        },500)
        return () => clearInterval(timer);
    },[])
    return (
        <>
        <textarea cols={200}/>
        <p>Word(s): {count}</p>
        </>
    )
}
export default WordCounter;