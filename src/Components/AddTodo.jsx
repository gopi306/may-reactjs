import React from 'react'

const AddTodo = () => {
  return (
    <React.Fragment>
    <div className="container text-center ">
    <div className="row ">
    <div className="col-4 m-2">
       <input type="text" placeholder='Enter a Name' />
     </div>
     <div className="col-4 m-2 ">
       <input type="date" />
     </div>
     <div className="col-2 m-2">
       <button type='button' className='btn btn-success'>Add</button>
     </div>
    </div>
    </div>
    </React.Fragment>

  )
}

export default AddTodo
