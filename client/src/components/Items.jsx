import { MdDelete } from "react-icons/md";

function Items({ todoName, todoDate, todo_id, onClickDelete }) {
  return (
    <>
      <div className="container text_items">
        <div className="row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onClickDelete(todo_id)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Items;
