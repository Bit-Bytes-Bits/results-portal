import React from 'react'
import "../styles/renderremark.css"

function RenderRemark({id, handleClick,remark}) {
    function handleDelete(){
        handleClick(id)
    }
  return (
    <div className="render-box-main">
      <div className='render-box'>
        <h4>Parents name: { remark.name }</h4>
        <h4>Remarks: { remark.remarks }</h4>
        <p>Date: { remark.date }</p>
        <button onClick={ handleDelete }>DELETE</button>
      </div>
    </div>
  )
}
export default RenderRemark
