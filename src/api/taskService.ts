const API_URL = "http://localhost:3001/tasks";

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
    // Obtener la tarea actual para preservar el título y la descripción
    const currentTaskResponse = await fetch(`${API_URL}/${taskId}`);
    if (!currentTaskResponse.ok) {
      throw new Error("Error al obtener la tarea actual");
    }
    const currentTask = await currentTaskResponse.json();

    // Combinar la tarea actual con los campos actualizados
    const fullUpdatedTask = {
      ...currentTask,
      ...updatedTask,
    };

    // Enviar la solicitud PUT con la tarea completa
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
