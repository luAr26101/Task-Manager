import "./TaskCard.css";

function TaskCard({ id, status, name, dueDate }) {
  return (
    <div className='card-wrapper'>
      <div className='card-header'>
        <p className='task-id'>{id}</p>
        <div className='badge'>
          <p>{status}</p>
        </div>
      </div>
      <div className='card-content'>
        <p>{name}</p>
      </div>
      <div className='card-footer'>
        <div className='due-date'>
          <p>Due Date</p>
          <p>{dueDate.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
