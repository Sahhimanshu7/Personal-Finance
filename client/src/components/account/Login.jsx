import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../../context/AuthContext";
import "../../assests/account/login.css";

export default function Login() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const { currentUser, setCurrentUser, loading, setLoading, error, setError } = useAuth();

  useEffect(() => {
    if(currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await axios.post("http://localhost:8080/api/auth/user/login/",{
        password: password,
        userName: userName
      })
      .then((response) => {
        setCurrentUser(response.data.userName);
      })
      .catch(() => {
        setError("Account not Found!")
      });
      navigate("/");
    } catch (error) {
      setError("Failed to login!");
    }
    setLoading(false);
  }

  return (
    <div className="login">
      <h1 className="login-header">Login</h1>
      <div className="login-form-main">
        <form onSubmit={handleFormSubmit}>
          <input 
            placeholder="Username..."
            id="username"
            type="text"
            className="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="Password..."
            id="password"
            type="password"
            className="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit"
            disabled={loading}
            className="login-button"
          >
              Login
          </button>
        </form>
        <Link to= "/register">
          <p className="link-to-register">
              Don't have an account? Register
          </p>
        </Link>
      </div>
    </div>
  );
}