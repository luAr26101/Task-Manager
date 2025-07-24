import React from "react";
import CreateTaskForm from "../forms/CreateTaskForm";
import Modal from "../modal/Modal";
import "./ControlPanel.css";

const ControlPanel = (props) => {
  const { taskList } = props;
  const openModal = () => {
    props.setIsOpen(true);
  };

  const closeModal = () => {
    props.setIsOpen(false);
  };

  const handleNewTaskAdd = (task) => {
    props.onNewTaskAdd(task);
    closeModal();
  };

  return (
    <div className='control-panel-container'>
      <div>
        <h3 className='view-title'>Tasks</h3>
        <p className='subtitle'>Your tasks in your space.</p>
      </div>
      {taskList.length > 0 && (
        <button onClick={openModal} className='button-primary btn-md'>
          Create Task
        </button>
      )}
      <Modal onClose={closeModal} isOpen={props.isOpen}>
        <h3>Create task</h3>
        <CreateTaskForm addNewTask={handleNewTaskAdd} />
      </Modal>
    </div>
  );
};

export default ControlPanel;
