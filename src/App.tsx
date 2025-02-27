
import { Navigate, Route, Routes } from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect, useState } from "react";

function App(): React.ReactElement {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(()=> {
    setIsAuth(Boolean(localStorage.getItem("login")))
  }, [])

  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
