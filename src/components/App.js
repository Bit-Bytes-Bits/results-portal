import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Results from "./Results";
import Home from "./Home";
import Footer from "./Footer";
import Remarks from "./Remarks";


function App() {
  const [fetchRemark, setFetchRemark] = useState(false);
  const [remarks, setRemarks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/remarks")
      .then((res) => res.json())
      .then((remarks) => {
        console.log(remarks);
        setRemarks(remarks);
      });
  }, [fetchRemark]);

  function handleClick(id) {
    fetch(`http://localhost:9292/remarks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const remainingRemarks = remarks.filter(
          (remaining) => remaining.id !== id
        );
        setRemarks(remainingRemarks);
      });
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/students")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      });
  }, []);
  function handleFetch() {
    setFetchRemark((fetchRemark) => !fetchRemark);
  }
  return (
    <div className="App">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <hr />
      <Switch>
        <Route exact path="/results">
          <Results isLoggedIn={isLoggedIn} results={results} />
        </Route>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/remarks">
          <Remarks
            remarks={remarks}
            handleClick={handleClick}
            setRemarks={setRemarks}
            handleFetch={handleFetch}
          />
        </Route>
        <Route exact path="/">
          <Home /*isLoggedIn={isLoggedIn} */ />
        </Route>
      </Switch>
      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
