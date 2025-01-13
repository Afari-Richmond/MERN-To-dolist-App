import  { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {location.reload()} )
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="create_form">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter a task here"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="button" onClick={handleAddTask}>
          {" "}
          Add Task
        </button>
      </div>
    </>
  );
};

export default Create;
