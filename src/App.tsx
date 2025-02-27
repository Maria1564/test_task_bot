import { useEffect } from 'react'

import { Route, Routes, useNavigate } from 'react-router'
import Login from './components/Login'

function App(): React.ReactElement {

  const navigate = useNavigate()

  useEffect(()=> {
    // axios.post("/chat", {name: 'kashtan'})
    // .then(res => console.log(res.data))
    if(!localStorage.getItem("login")) navigate("/login", {replace: true})
  }, [navigate])

  return (
    <>
     <Routes>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
