import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <h1 className="text-3xl underline">Hello</h1>
    <button className="btn btn-neutral">Neutral</button>
    <button className="btn btn-primary">Primary</button>
    <button className="btn btn-secondary">Secondary</button>
    <button className="btn btn-accent">Accent</button>
    <button className="btn btn-info">Info</button>
    <button className="btn btn-success">Success</button>
    <button className="btn btn-warning">Warning</button>
    <button className="btn btn-error">Error</button>
  </>)
}

export default App
