import React from "react";
import "./CreateTaskForm.css";

function CreateTaskForm() {
  return (
    <div>
      <form action=''>
        <div className='form-row'>
          <label htmlFor='name'>Task name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-row'>
          <label htmlFor='due-date'>Due date</label>
          <input type='date' id='dute-date' />
        </div>
        <div className='form-row'>
          <label htmlFor='task-details'>Task details</label>
          <textarea id='task-details' noresize='true' rows='10'></textarea>
        </div>
        <button>Create task</button>
      </form>
    </div>
  );
}

export default CreateTaskForm;
