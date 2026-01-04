import { useState } from "react";
import Input from "./Input.jsx";

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

  const passwordIsInvalid =didEdit.password && enteredInputValue.password.trim().length < 6;

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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event)}
          value={enteredInputValue.email}
          error={emailIsInvalid && 'Please Enter a Valid Email' }
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleInputChange("password", event)}
          value={enteredInputValue.password}
          error={passwordIsInvalid && 'Please Enter a Valid Password' }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
