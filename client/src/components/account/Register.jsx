import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../assests/account/register.css";
import { useAuth } from "../../context/AuthContext";

function emailValidator() {
  // Define a regular expression pattern for email validation.
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
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
    
    try {
      setError("");
      await axios.post("/api/auth/user/create-user/",{}, {} )
      .then()
      .catch();
      navigate("/profile");
    } catch (error) {
      setError("Failed to Register, Please try again!");
    }

    setLoading(false);
  }
}