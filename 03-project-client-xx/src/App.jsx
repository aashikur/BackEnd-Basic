import './App.css'
import Users from './components/Users'

function App() {

  const userPromise = fetch('http://localhost:3000/users')
    .then(res => res.json())

  return (
    <>
    

      <h1> Client Side </h1> 
      <Users userPromise={userPromise}/>
    
    </>
  )
}

export default App
