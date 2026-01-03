import { useState } from "react";

export default function Login() {
  const [enteredInputValue, setEnteredInputValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email && !enteredInputValue.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredInputValue);
  }

  function handleInputChange(identifier, event) {
    setEnteredInputValue((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
    setDidEdit((prevDidEdit) => ({
      ...prevDidEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevDidEdit) => ({
      ...prevDidEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event)}
            value={enteredInputValue.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event)}
            value={enteredInputValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
