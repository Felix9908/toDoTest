import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchTasks, updateTask, createTask } from "../api/taskService";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  toggleTaskCompletion: (taskId: number) => Promise<void>;
  addTask: (title: string, description: string) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.log(error);
        setError("Error al cargar las tareas");
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  const toggleTaskCompletion = async (taskId: number) => {
    try {
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        const updatedTask = await updateTask(taskId, { completed: !task.completed });
        
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t.id === taskId ? updatedTask : t))
        );
      }
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      setError("Error al actualizar la tarea");
    }
  };  

  const addTask = async (title: string, description: string) => {
    try {
      const newTask = await createTask({ title, description });
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.log(error);
      setError("Error al crear la tarea");
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, loading, error, toggleTaskCompletion, addTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks debe usarse dentro de un TaskProvider");
  }
  return context;
};