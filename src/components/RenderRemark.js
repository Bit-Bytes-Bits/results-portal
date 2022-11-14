import React from 'react'
import "../styles/renderremark.css"
import deleteIcon from "../logo/delete.svg"
// import Footer from "./Footer"

function RenderRemark({id, handleClick,remark}) {
    function handleDelete(){
        handleClick(id)
    }
  return (
    <div className="render-box-main">
      <div className='render-box'>
        <h4>Parents name: </h4><p>{ remark.name }</p>
        <h4>Remarks: </h4><p>{ remark.remarks }</p>
        <h4>Date: </h4><p>{ remark.date }</p>
        <button className="deleteBtn" onClick={ handleDelete }><img src={ deleteIcon } className="App-logo" alt="Delete" /></button>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  )
}
export default RenderRemark
