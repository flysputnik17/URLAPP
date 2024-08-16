import "./Form.css";
import "animate.css";
import { useState } from "react";

const Form = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonText, setButtonText] = useState("Disabled");
  const [buttonStyle, setButtonStyle] = useState("form-button-disabled");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const validateUrls = (urls) => {
    //urlArray barking the string the user entered into individual url's and then checking if there is at least 3 url's
    const urlArray = urls.split(/[ ,\n]+/).filter((url) => url.length > 0);
    //urlPattern checking if the string the user entered is a url or not
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;

    // Check if at least 3 valid URLs are present
    const validUrls = urlArray.filter((url) => urlPattern.test(url));

    if (validUrls.length < 3) {
      setErrorMessage("Please enter at least 3 URLs.");
      setButtonDisabled(true);
    } else {
      setErrorMessage("");
      setButtonText("FIND");
      setButtonStyle("form-button-active");
      setButtonDisabled(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    validateUrls(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(validateUrls);
  };

  return (
    <div className="form">
      <h1 className="form__title">URL SEARCHER</h1>
      <form className="form__continer" onSubmit={handleSubmit}>
        <label className="form__continer-label" htmlFor="url">
          Please enter at least 3 URLs, separated by commas, spaces, or new
          lines:
          <textarea
            className="form__continer-textarea"
            required
            id="url"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter URLs here"
            rows="4"
          />
        </label>
        {errorMessage && (
          <p className="form__error animate__animated animate__pulse animate__infinite	infinite">
            {errorMessage}
          </p>
        )}
        <button className={buttonStyle} disabled={buttonDisabled} type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Form;
