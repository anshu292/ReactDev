import { useState } from "react";
import './Login.css'; // Ensure that you have the CSS file for styling the success/failure classes

export default function Login() {
  const [res, setRes] = useState(""); // Stores response message or token
  const [name, setName] = useState(""); // Stores the email entered by the user
  const [pwd, setPwd] = useState(""); // Stores the password entered by the user
  const [loginStatus, setLoginStatus] = useState(null); // Tracks login success/failure

  const apiCall = async () => {
    // Check if email and password are entered
    if (!name) {
      setRes("Email field is empty");
      setLoginStatus(false);
      return;
    }
    if (!pwd) {
      setRes("Password field is empty");
      setLoginStatus(false);
      return;
    }

    // Prepare data for the login request
    let data = {
      "email": name,
      "password": pwd
    };

    // Make the API call to the login endpoint
    let response = await fetch("https://reqres.in/api/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" }
    });

    if (response.ok) {
      let json = await response.json();
      console.log(json);
      setRes("Token: " + json['token']); // Display the token in the response
      setLoginStatus(true); // Set loginStatus to true on success
    } else {
      setLoginStatus(false); // Set loginStatus to false on failure
      setRes("Login failure!!");
    }
  };

  return (
    <>
      <div>
        <input
          className="input"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter email"
        />
      </div>
      <div>
        <input
          className="input"
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div>
        <input className="input" type="button" onClick={() => apiCall()} value="Login" />
      </div>
      <div>
        <h1>Token</h1>
      </div>
      <h1 className={loginStatus === true ? 'success' : loginStatus === false ? 'failure' : ''}>{res}</h1>
    </>
  );
}
