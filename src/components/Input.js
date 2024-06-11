import { useState } from "react";

export default function Input({ placeholder, type, field, formFields, setFormFidelds, formSubmit }) {
  const [info, setInfo] = useState("");
  const [isEmpty, setEmpty] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setInfo(value);
    value ? setEmpty(false) : setEmpty(true);
    if (value) {
        setEmpty(false);
        setFormFidelds({...formFields, [field]: true});
    } else {
        setEmpty(true);
        setFormFidelds({...formFields, [field]: false});
    }
    console.log(formFields);
  }

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }
  return (
    <label className={info && "minimize-type"}>
      <span>{placeholder}</span>
      <input
        type={passwordVisible ? "text" : type}
        value={info}
        onChange={handleChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
      <div className={"required-icon" + (isEmpty || (formSubmit ? !formFields[field] : null)? " show-required" : "")}>
        <img src="/react-form-validation/require-icon.svg" alt="" />
      </div>
      {type === "password" && info ? (
        <div className="hide-password">
          <button type="button" onClick={togglePasswordVisibility}>
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>
      ) : null}
    </label>
  );
}
