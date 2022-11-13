import React from "react";
import Table from "./Table";

function Results({ results }) {

  console.log(results);
  return(
  <div>
   <Table results={results}/>
  </div>
 )
}

export default Results;

