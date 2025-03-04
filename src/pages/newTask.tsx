import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/taskContext";

const NewTask = () => {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addTask(title, description);
      navigate("/");
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Header con botón "Atrás" */}
      <div className="flex items-center p-4 border-b-2 border-black">
        <button
          onClick={() => navigate(-1)} // Navega a la vista anterior
          className="text-lg font-semibold hover:text-gray-600"
        >
          &lt; Atrás
        </button>
      </div>

      {/* Formulario para añadir una nueva tarea */}
      <form onSubmit={handleSubmit} className="mt-6">
        {/* Input para el título */}
        <div className="mb-6">
        <div className="flex justify-between items-center p-4 border-black">
          <h2 className="text-xl font-semibold">Titulo de la tarea</h2>
        </div>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Textarea para la descripción */}
        <div className="mb-6">
        <div className="flex justify-between items-center p-4 border-black">
          <h2 className="text-xl font-semibold">Descripciòn de la tarea</h2>
        </div>
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 h-82 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
            rows={4}
            required
          />
        </div>

        {/* Botón de guardar */}
        <button
          type="submit"
          className="w-full border-2 border-black font-semibold text-black p-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default NewTask;