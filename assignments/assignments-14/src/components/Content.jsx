/* eslint-disable react/prop-types */

import { useState } from "react";


const Content = ({addTodo}) => {

  const [todo, setTodo] = useState("")

  let submitTodo = (e) => {
    e.preventDefault()

    if(!todo) return

    let newTodo = {todo, id: Date.now(), done:false}
    
    addTodo(newTodo)
    setTodo("")
  }

  return (
    <>
      <section className="form-container mt-5 bg-body-tertiary">
        <div className="container">
          <div className="content pt-5 pb-5 text-center">

            <form action="" onSubmit={submitTodo}>
              <input type="text" name="todo" className="form-control fw-bolder text-center" value={todo} placeholder="enter todos" onChange={(e) => setTodo(e.target.value)} />
              <button className="btn btn-lg btn-success text-capitalize mt-4">submit</button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
};

export default Content;