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
    // Use Promise.all to handle multiple API calls concurrently
    Promise.all(urls.map((url) => getSearchResults(url)))
      .then((results) => {
        setData(results); // Set all results at once
        setSearchClicked(true); // Update state after all requests are complete
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
