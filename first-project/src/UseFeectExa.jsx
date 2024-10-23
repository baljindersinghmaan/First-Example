
import React, {useState, useEffect} from "react"

function UseEffect(){
    const [count, setCount] = useState(0);
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [width,height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }


    useEffect(() => {
        document.title = `count ${count} `
    },[count])

    function handleCount(){
        setCount(c => c+1)
    }

    return(<div>
        <p>Count: {count}</p>
        <button onClick={handleCount}> Add </button>
        <p>Height: {height}</p>
        <p>Width: {width}</p>
    </div>)

}

export default UseEffect