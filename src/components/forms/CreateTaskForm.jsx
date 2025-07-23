import React, { useState } from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = () => {
  // const [taskName, setTaskName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const [taskDetails, setTaskDetails] = useState("");

  const [formData, setFormData] = useState({
    taskName: "Go Shopping",
    dueDate: "2025-02-23",
    taskDetails: "I have to buy a lot of groceries.",
  });
  console.log(formData);

  const handleChange = function (event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = function (event) {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <label className='label-md'>Task Name</label>
          <input
            className='input-primary'
            type='text'
            onChange={handleChange}
            name='taskName'
            value={formData.taskName}
          />
        </div>

        <div className='form-row'>
          <label className='label-md'>Due Date</label>
          <input
            className='input-primary'
            type='date'
            onChange={handleChange}
            name='dueDate'
            value={formData.dueDate}
          />
        </div>

        <div className='form-row'>
          <label className='label-md'>Task Details</label>
          <textarea
            className='input-primary'
            cols='30'
            rows='10'
            onChange={handleChange}
            name='taskDetails'
            value={formData.taskDetails}
          ></textarea>
        </div>

        <button className='button-primary' type='submit'>
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
