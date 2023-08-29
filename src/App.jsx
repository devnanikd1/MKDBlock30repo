import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Posts from "./pages/Posts";
import UserProfile from "./components/UserProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import { fetchGuest } from "./api/request";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [guest, setGuest] = useState(null);
  const navigate = useNavigate();
  console.log({token},"HELLO");
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      const getGuest = async () => {
        const response = await fetchGuest(token);
        setGuest(response.data);
      };
      getGuest();
    }
  }, [token]);
  const logout = ()=> {
  setToken(null)
  setGuest(null)
navigate ("/")

}
  return (
    <div>
      <NavBar token={token} setToken={setToken} logout={logout} />
      <Routes>
        <Route path="/posts" element={<Posts token={token} />} />
        <Route path="/profile" element={<UserProfile guest={guest} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
      </Routes>
    </div>
  );
}
export default App;
