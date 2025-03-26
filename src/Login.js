import React, { useState } from "react";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    setIsLoggedIn(true);
    alert("Login Successful!");
    setEmail("");
    setPassword("");
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    setIsLoggedIn(true);
    alert("Sign Up Successful!");
    setEmail("");
    setPassword("");
    setName("");
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    alert("Logged Out Successfully!");
  };

  return (
    <div className="auth-form-container">
      {!isLoggedIn ? (
        <div>
          <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
          <form onSubmit={isSignUp ? handleSignUpSubmit : handleLoginSubmit} className="auth-form">
            {isSignUp && (
              <div>
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={isSignUp}
                />
              </div>
            )}
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-submit-btn">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="toggle-signup">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span onClick={() => setIsSignUp(!isSignUp)} className="toggle-link">
                {isSignUp ? "Login" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="logged-in-container">
          <h2>Welcome!</h2>
          <button onClick={handleLogOut} className="auth-submit-btn">Log Out</button>
        </div>
      )}
    </div>
  );
}

export default Login;
