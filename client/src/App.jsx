import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";



const App = () => {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> :
          <Register />} />
      </Routes>
      {
        user && (
          <>
            <Routes>
              <Route path="/movies" element={<Home
                type="movies" />} />
            </Routes>
            <Routes>
              <Route path="/series" element={<Home
                type="series" />} />
            </Routes>
            <Routes>
              <Route path="/watch" element={<Watch />} />
            </Routes>
          </>
        )
      }
      <Routes>
        <Route path="/login" element={!user ?
          <Login /> : <Home />} />
      </Routes>
      <Routes>
        <Route path="/register" element={!user ?
          <Register /> : <Home />} />
      </Routes>
    </Router>
  );
};


export default App;