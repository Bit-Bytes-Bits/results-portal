import React, { useState } from "react"
import RenderRemark from "./RenderRemark"
function Remarks({ remarks, handleClick, handleFetch }) {
    const [remark, setRemark] = useState({
        name: "",
        remarks: "",
        date: ""
    })
    function handleChange(e) {
        console.log(e.target.value)
        let name = e.target.name
        let value = e.target.value
        setRemark({
            ...remark, [name]: value
        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/remarks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(remark)
        })
            .then(r => r.json())
            .then((data) => {
                // console.log(data)
            })
        handleFetch()

    }

    return (
        <div>
            <div className="remarks-form">
                <form onSubmit={ handleSubmit }>
                    <input onChange={ handleChange } type="text" placeholder="Fill your remarks" name="remarks" />
                    <input onChange={ handleChange } type="text" placeholder="Name" name="name" />
                    <input onChange={ handleChange } type="date" placeholder="Date" name="date" />
                    <button>Submit</button>
                </form>
            </div>
            <div className="render-box-main">
                { remarks.map((remark) => <RenderRemark key={ remark.id } id={ remark.id } remark={ remark } handleClick={ handleClick } />) }
            </div>

        </div>
    )
}

export default Remarks
