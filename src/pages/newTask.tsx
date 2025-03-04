import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/taskContext";

const NewTask = () => {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const isValidInput = (text: string) => /^[a-zA-Z0-9\s]+$/.test(text);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || isValidInput(value)) {
      setTitle(value);
      setError("");
    } else {
      setError("Solo se permiten letras y números.");
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value === "" || isValidInput(value)) {
      setDescription(value);
      setError("");
    } else {
      setError("Solo se permiten letras y números.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      setError("Los campos no pueden estar vacíos.");
      return;
    }
    try {
      await addTask(title, description);
      navigate("/");
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center p-4 border-b-2 border-black">
        <button
          onClick={() => navigate(-1)} 
          className="text-lg font-semibold hover:text-gray-600"
        >
          &lt; Atrás
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-6">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-semibold">Título de la tarea</h2>
          </div>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-3 border border-black rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-semibold">Descripción de la tarea</h2>
          </div>
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full p-3 h-82 border border-black rounded-lg focus:outline-none focus:border-blue-500"
            rows={4}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}

        <button
          type="submit"
          className="w-full border border-black font-semibold text-black p-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default NewTask;
