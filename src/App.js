import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count3, setCount3] = useState("H");

  const [render, setRender] = useState(0);
  const [render1, setRender1] = useState(0);
  const [render3, setRender3] = useState(0);
  // useEffect
  useEffect(() => {
    setRender(render + 1);
    console.log("useEffect with no dpenedencies:" + count + "no of renders = " + render);
  })

  useEffect(() => {
    setCount1(count1 + 1);
    setRender1(render1 + 1);
    console.log("useEffect with []:" + count1)
  }, [])

  useEffect(() => {
    setCount3(count3 + "i")
    setRender3(render3 + 1);
    console.log("useEffect with [count] adds i to Hi every time count changes:" + count3)
  }, [count])


  return (
    < div >
      < button type="button" onClick={() => { setCount(count + 1); }} >Click Me</button>
      <p>useEffect with no dpenedencies:{count} no of renders =  {render}</p>
      <p>useEffect with []:{count1} no of renders =  {render1}</p>
      <p>useEffect with [count] adds i to Hi every time count changes:{count3} no of renders =  {render3}</p>
    </div >
  )
}

export default App;
