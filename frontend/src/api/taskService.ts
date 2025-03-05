const API_URL = "/.netlify/functions/api/tasks";

// Obtener todas las tareas
export const fetchTasks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener las tareas");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Crear una nueva tarea
export const createTask = async (task: {
  title: string;
  description: string;
}) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Error al crear la tarea");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Actualizar una tarea existente
export const updateTask = async (
  taskId: number,
  updatedTask: { completed: boolean }
) => {
  try {
    const currentTaskResponse = await fetch(`${API_URL}/${taskId}`);
    if (!currentTaskResponse.ok) {
      throw new Error("Error al obtener la tarea actual");
    }
    const currentTask = await currentTaskResponse.json();

    const fullUpdatedTask = {
      ...currentTask,
      ...updatedTask,
    };

    const response = await fetch(`${API_URL}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullUpdatedTask),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la tarea");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
