/* eslint-disable react/prop-types */
import List from "./List";


const ShowTodos = ({ todos, deleteTask, clearList, toggleDone, toggleUndone }) => {

  let list = todos

  let confirm_delete = () => {
    return (
      <div
        className="modal fade"
        id="listClear"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Confirm task list deletion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p className="text-start">Do you want to delete all the tasks ?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => clearList()}
              >
                delete
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const clear_btn = (listSize) => {
    if(listSize > 0){
      return (
        <div className="clear-list text-center mt-4 mb-5">
          <button className="btn btn-danger text-capitalize" data-bs-toggle="modal" data-bs-target="#listClear">clear tasks</button>
          {confirm_delete()}
        </div>
      )
    }
  }

  const showHeader = (listSize) => {
    if(listSize > 0){
      return (
        <h4 className="mb-5 text-dark-emphasis text-uppercase">Your todos</h4>
      )
    }
  }

  const placeHolder = (listSize) => {
    if(listSize == 0){
      return (
        <h4 className="text-center mb-5 pt-5 text-secondary"> Your tasks will be shown here</h4>
      )
    }
  }

  return (
    <>
      <section className="show-todos mt-5 mb-5 bg-body">
        <div className="container">
          <div className="content text-center">

            {
              showHeader(list.length)
            }

            {
              placeHolder(list.length)
            }

            <div className="row">
              {
                list.map((e, index) => (
                  <List todo={e} deleteTask={deleteTask} key={index} toggleDone={toggleDone} toggleUndone={toggleUndone} />
                ))
              }
            </div>

            {
              clear_btn(list.length)
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default ShowTodos;