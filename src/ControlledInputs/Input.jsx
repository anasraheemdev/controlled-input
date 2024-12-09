import React from 'react'

const Input = () => {
  return (
    <>
    <div className="container shadow p-4 col-lg-5 mx-auto">
        <form >
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter Your Name' className="form-control" />
            </div>
            <button className="btn btn-primary my-2 w-100">Add Data</button>
        </form>
    </div>
    </>
  )
}

export default Input