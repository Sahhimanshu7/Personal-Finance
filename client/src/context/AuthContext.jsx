import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }){
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const value = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    error,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}