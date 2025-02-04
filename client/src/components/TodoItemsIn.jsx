import Items from "./Items";
function TodoItemsIn({ todoele, onClickDelete }) {
  return (
    <>
      <div className="container">
        {todoele.map((item) => (
          <Items
            key={item._id}
            todoName={item.task}
            onClickDelete={onClickDelete}
            todoDate={item.date}
            todo_id={item._id}
          />
        ))}
      </div>
    </>
  );
}
export default TodoItemsIn;
