//style import
import "./App.css";

import { useState } from "react";
//Raect components imports
import Form from "../Form/Form";
import Result from "../Result/Result";
import Footer from "../Footer/Footer";

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
      <Footer />
    </div>
  );
};

export default App;
