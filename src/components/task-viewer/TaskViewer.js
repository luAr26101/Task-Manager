import TaskCard from "../task-card/TaskCard";
import "./TaskViewer.css";

function TaskViewer(props) {
  const { taskList } = props;
  return (
    <div className='task-viewer-container'>
      <div className='task-list-container'>
        {taskList.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

export default TaskViewer;
