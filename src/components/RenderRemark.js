import React from 'react'

function RenderRemark({id, handleClick,remark}) {
    function handleDelete(){
        handleClick(id)
    }
  return (
    <div>
         <h4>{remark.name}</h4>
        <h4>{remark.remarks}</h4>
        <p>{remark.date}</p>
        <button onClick={handleDelete}>DELETE</button>
    </div>
  )
}

export default RenderRemark