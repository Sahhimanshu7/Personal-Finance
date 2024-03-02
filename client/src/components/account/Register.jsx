import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../../assests/account/register.css";
import { useAuth } from "../../context/AuthContext";

function emailValidator(email) {
  // Define a regular expression pattern for email validation.
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function userNameValidator(username) {
  async function getUserName(username) {
    await axios.get(`http://localhost:8080/api/auth/user/${username}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      throw new Error("User error " + error);
    })
  }

  if (username !== "") getUserName(username);
}

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { currentUser, setCurrentUser, loading, setLoading, error, setError } = useAuth();

  useEffect(() => {
    if(currentUser) {
      navigate("/");
    }
  });

  async function handleFormSubmit(event) {
    event.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Unable to Register, passwords don't match!");
      return;
    }
    
    try {
      setError("");
      await axios.post("http://localhost:8080/api/auth/user/create-user/",{
        email: email,
        password: password,
        userName: username
      })
      .then((response) => {
        console.log(response.status, response.data);
      })
      .catch((error) => {
        throw new Error("Register error " + error);
      });
      navigate("/profile");
    } catch (error) {
      setError("Failed to Register, Please try again!");
    }

    setLoading(false);
  }

  return (
    <div className="register">
      <div className="register-header">
        Register
      </div>
      <div className="register-form-container">
        <form onSubmit={handleFormSubmit}>
          <input
            className="email"
            type="email"
            placeholder="Email..."
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailValidator(email) || email.length <= 3 ? " " :  <div className="email-error">
            Email Invalid
          </div>
          }

          <input
            className="username"
            type="text"
            placeholder="Username..."
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
              userNameValidator(username);
            }}
          />

          <input
            placeholder="Password..."
            id="password"
            type="password"
            className="password"
            onChange={(e) => setPassword(e.target.value)}
            />
          <input
            placeholder="Confirm Password..."
            id="confirmPassword"
            type="password"
            className="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password !== confirmPassword && confirmPassword.length >= 4 ? <div className="password-error">
            Passwords don't match  
          </div>
          :
          ""
          }
          <button 
            type="submit"
            disabled={loading}
            className="register-button"
          >
              Register
          </button>
        </form>
      </div>
    </div>
  )
}