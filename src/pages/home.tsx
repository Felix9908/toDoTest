import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import TaskCard from "../components/taskCard";
import { useTasks } from "../context/taskContext";

const Home = () => {
  const navigate = useNavigate();
  const { tasks, loading, error, toggleTaskCompletion } = useTasks();

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  if (error) {
    return <p className="text-red-500 p-4">{error}</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Header title="Jose Antonio" />

      <div className="flex justify-between items-center p-4 mb-6 border-b-2 border-black">
        <h1 className="text-2xl font-bold">Mis tareas</h1>
        <button
          onClick={() => navigate("/new-task")}
          className="border-2 border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors"
        >
          Nuevo +
        </button>
      </div>

      <div className="mb-8">
        <div className="mt-4">
          {loading ? (
            <p className="text-gray-600 p-4">Cargando tareas pendientes...</p>
          ) : incompleteTasks.length > 0 ? (
            incompleteTasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                completed={task.completed}
                onToggle={() => toggleTaskCompletion(task.id)}
              />
            ))
          ) : (
            <p className="text-gray-600 p-4">No hay tareas pendientes.</p>
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center p-4 border-b-2 border-black">
          <h2 className="text-xl font-semibold">Tareas completadas</h2>
        </div>
        <div className="mt-4">
          {loading ? (
            <p className="text-gray-600 p-4">Cargando tareas completadas...</p>
          ) : completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                completed={task.completed}
                onToggle={() => toggleTaskCompletion(task.id)}
              />
            ))
          ) : (
            <p className="text-gray-600 p-4">No hay tareas completadas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;