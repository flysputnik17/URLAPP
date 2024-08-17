// style import
import "./App.css";

import { useState } from "react";
// React components imports
import Form from "../Form/Form";
import Result from "../Result/Result";
import Footer from "../Footer/Footer";

import { getSearchResults } from "../../utils/ThirdPartyApi";

const App = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [data, setData] = useState([]);

  const handleSearch = (urls) => {
    setData([]);
    if (urls.length < 3) {
      console.error("Please provide at least 3 URLs.");
      return;
    }

    getSearchResults(urls)
      .then((results) => {
        setData(results);
        setSearchClicked(true);
      })
      .catch((err) => {
        console.error("Error in getSearchResults:", err);
      });
  };

  return (
    <div className="page">
      <Form handleSearch={handleSearch} />
      {searchClicked && <Result data={data} />}
      <Footer />
    </div>
  );
};

export default App;
