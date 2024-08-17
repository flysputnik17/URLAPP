import "./Form.css";
import "animate.css";
import { useState, useEffect } from "react";

const Form = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonText, setButtonText] = useState("Disabled");
  const [buttonStyle, setButtonStyle] = useState("form-button-disabled");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [dataArray, setDataArray] = useState([]);

  const validateUrls = (urls) => {
    const urlArray = urls.split(/[ ,\n]+/).filter((url) => url.length > 0);

    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;

    const validUrls = urlArray.filter((url) => urlPattern.test(url));

    if (validUrls.length < 3) {
      setErrorMessage("Please enter at least 3 URLs.");
      setButtonDisabled(true);
    } else {
      setErrorMessage("");
      setDataArray(urlArray);
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
    console.log("Submitting URLs:", dataArray);

    handleSearch(dataArray);
  };

  useEffect(() => {
    console.log("dataArray:", dataArray);
  }, [dataArray]);
  return (
    <div className="form">
      <h1 className="form__title animate__animated animate__fadeInUp">
        URL SEARCHER
      </h1>
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
