import { createContext, useContext, useState } from "react";

const API = "https://fsa-jwt-practice.herokuapp.com";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [location, setLocation] = useState("GATE");

  // TODO: signup
 const signup = async (username) => {
  try {
    const response = await fetch(`${API}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });

    const result = await response.json();

    if (!response.ok) throw new Error(result.message);

    setToken(result.token);
    setLocation("TABLET");
  } catch (err) {
    console.error("Signup failed:", err);
  }
};


  // TODO: authenticate
  const authenticate = async () => {
    if (!token) throw new Error("No token found!");

    try {
      const response = await fetch(`${API}/authenticate`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message);

      setLocation("TUNNEL");
      return result;
    } catch (err) {
      console.error("Authentication failed:", err);
      throw err;
    }
  };

  const value = { token, location, signup, authenticate };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
