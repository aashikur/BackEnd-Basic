import './App.css'
import Users from './component/users'

function App() { 
  const userPromise = fetch('http://localhost:3000/users').then(res=> res.json());

  return (
    <>

      <Users userPromise={userPromise} />
    
    </>
  )
}

export default App