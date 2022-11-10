import React from "react";
import Table from "./Table";

function Results({ results }) {

  console.log(results);
  return <Table results={results}/>;
}

export default Results;

