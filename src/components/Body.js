import { useState } from "react";
import Input from "./Input";

export default function Body() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [formFields, setFormFidelds] = useState({
    email: false,
    fullName: false,
    userName: false,
    password: false,
  });

  function handleSubmit(event) {
    let noEmptyField = true;

    for (let field in formFields) {
      if (formFields[field] === false) {
        noEmptyField = false;
      }
    }

    if (noEmptyField === false) {
      event.preventDefault();
      setFormSubmit(true);
    }
  }
  return (
    <main className="full-container">
        <div className="box-container">
          <div className="form-div">
            <div className="form-body">
              <h2 className="sign-up-heading">Sign Up</h2>
              <form action="/" onSubmit={handleSubmit}>
                <Input
                  placeholder="Email"
                  type="email"
                  field="email"
                  formFields={formFields}
                  setFormFidelds={setFormFidelds}
                  formSubmit={formSubmit}
                />
                <Input
                  placeholder="Full Name"
                  type="text"
                  field="fullName"
                  formFields={formFields}
                  setFormFidelds={setFormFidelds}
                  formSubmit={formSubmit}
                />
                <Input
                  placeholder="Username"
                  type="text"
                  field="userName"
                  formFields={formFields}
                  setFormFidelds={setFormFidelds}
                  formSubmit={formSubmit}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  field="password"
                  formFields={formFields}
                  setFormFidelds={setFormFidelds}
                  formSubmit={formSubmit}
                />
                <p>
                  By signing up, you agree to our Terms , Privacy Policy and
                  Cookies Policy .
                </p>
                <button className="sign-up-button">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
    </main>
  );
}
