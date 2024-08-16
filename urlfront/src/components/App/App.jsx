//style import
import "./App.css";

import { useState } from "react";
//Raect components imports
import Form from "../Form/Form";
import Result from "../Result/Result";

const App = () => {
  const [seacrhClicked, setSeacrhClicked] = useState(false);

  const handleSearch = (e) => {
    setSeacrhClicked(true);
    //calling the api function to the backend
  };

  return (
    <div className="page">
      <Form handleSearch={handleSearch} />
      {seacrhClicked ? <Result /> : <></>}
    </div>
  );
};

export default App;
