import React, { useState } from 'react';

function Login() {
  const [u_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    if (u_name === "admin" && password === "123") {
      setMessage("Welcome =>");
    }
    else {
      setMessage("Invalid username or password");
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
      <h1 className="text-3xl font-bold text-center mb-6">Login Page</h1>
      <form className="space-y-4">
        <div>
          <label>Username: </label>
          <input type="text" value={u_name} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="button" onClick={validate} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">Login</button>
      </form>
      <h3 className="text-center mt-4 font-semibold">{message}</h3>
      </div>
    </div>
  );
}

export default Login;