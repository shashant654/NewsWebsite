import React,{useState,useEffect,useRef} from 'react'

function Hooks() {
const [counter,setCounter] = useState(0)
let normalCounter = 0;
const refCounter = useRef(0)

useEffect(() => {
    console.log('state counter',counter);
    console.log('normal counter',normalCounter);
    console.log('ref counter',refCounter.current);

    return () => {
        console.log('unmounting component');
        // becoz first of all unmounting hoti hai and then state counter increment hota hai
    }
})

function increment() {
    setCounter(counter+1)
    normalCounter =normalCounter+1
    refCounter.current = refCounter.current +1
}

  return (
    <div>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Hooks