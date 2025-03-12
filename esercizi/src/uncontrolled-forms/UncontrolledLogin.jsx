import React from "react";

function UncontrolledLogin() {
  const onLogin = (event) => {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const session = event.target.elements.namedItem("session").checked;

    const data = { username, password, session };

    console.log(data);
  };

  const loginWithFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target.form); // new FormData(document.querySelector("form"))

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };

    console.log(data);
  };

  return (
    <form onSubmit={onLogin} className="flex flex-col gap-2">
      <h1>Uncontrolled Form</h1>
      <label>
        Username:
        <input
          type="text"
          name="username"
          className="border-2 border-gray-200"
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          className="border-2 border-gray-200"
        />
      </label>

      <label>
        <input type="checkbox" name="session" /> Remember me
      </label>

      <button type="submit" className="bg-blue-500 text-white">
        Login
      </button>
      <button type="button" onClick={loginWithFormData} className="bg-blue-300">
        Login with FormData
      </button>
    </form>
  );
}

export default UncontrolledLogin;
