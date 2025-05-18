import React from 'react'

const TodoItem1 = () => {
  return (
    <React.Fragment>
        <div className="container text-center ">
    

    <div className="row ">
    <div className="col-4 m-2">
     <h3>Buy Curd</h3>
     </div>
     <div className="col-4 m-2 ">
     <h3>02/23/1994</h3>
     </div>
     <div className="col-2 m-2">
       <button type='button' className='btn btn-danger'>Delete</button>
     </div>
    </div>
    </div>
    </React.Fragment>
  )
}

export default TodoItem1
