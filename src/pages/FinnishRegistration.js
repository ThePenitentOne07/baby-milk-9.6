import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const FinishRegistration = () => {
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const getQueryParams = (search) => {
    const params = new URLSearchParams(search);
    return {
      email: params.get("email"),
      username: params.get("username"),
    };
  };

  const { email} = getQueryParams(location.search);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append("emailAddress", email);
    formData.append("username", username);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);
   

    try {
      const response = await fetch("http://localhost:8080/register/complete-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (response.ok) {
        console.log("Registration completed");
        // Handle successful registration
      } else {
        console.error("Registration failed");
        // Handle registration failure
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input type="email" name="emailAddress" value={email || ""} readOnly />
          </label>
        </div>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value)}  />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FinishRegistration;
