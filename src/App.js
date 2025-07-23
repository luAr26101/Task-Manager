import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

function App() {
  const data = [
    {
      id: "T-1",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2025, 5, 22),
    },

    {
      id: "T-2",
      status: "In Progress",
      name: "Create a Design System for web app",
      dueDate: new Date(2025, 5, 1),
    },

    {
      id: "T-3",
      status: "Completed",
      name: "Create a Design System for web app",
      dueDate: new Date(2025, 6, 10),
    },
  ];

  return (
    <div className='app-container'>
      <TaskCard {...data[0]} />
    </div>
  );
}

export default App;
