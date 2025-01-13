import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        location.reload()
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
    .delete("http://localhost:3001/delete/" + id)
    .then((result) => {
      location.reload()
    })
    .catch((err) => console.log(err));

  }

  return (
    <>
      <div className="home">
        <h2>To Do List</h2>
        <Create />

        {todos.length === 0 ? (
          <div className="todos">No Tasks Available</div>
        ) : (
          todos.map((todo) => (
            <div className="task" key={todo._id}>
              <div className="checkBox" onClick={() => handleEdit(todo._id)}>
                <p className={todo.completed ? "line-through" : ""}>
                  {todo.completed ? (
                    <BsFillCheckCircleFill />
                  ) : (
                    <BsCircleFill className="delIcon" />
                  )}{" "}
                  {todo.task}
                </p>
              </div>
              <div>
                <span>
                  <FaTrash className="delIcon" onClick={  () =>  handleDelete(todo._id )}/>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
