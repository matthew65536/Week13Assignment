import React, { useState } from "react";

function App() {
  //React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, SetIsSubmitted] = useState(false);

  // User Login info (Obviously not secure at all :D )
  const database = [
    {
      username: "Gandalf",
      password: "You-Shall-Not-Pass!"
    },
    {
      username: "admin",
      password: "admin"
    }
];

const errors = {
  uname: "invalid username",
  pass: "invalid pasword"
};

const handleSubmit = (event) => {
  // prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0];

  //Find User Login info
  const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  if (userData) {
    if (userData.password !== pass.value) {
      // invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      SetIsSubmitted(true);
    }
  } else {
    //username not found
    setErrorMessages({ name: "uname", message: errors.name });
  }
};
// Generate JSX code for error message
const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

//JSX code for login form
const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
);

return (
  <div className="app">
    <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  </div>
);

}

export default App;