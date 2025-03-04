interface TaskCardProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

const TaskCard = ({ title, completed, onToggle }: TaskCardProps) => {
  const handleCheckboxChange = () => {
    onToggle();
  };

  return (
    <div
      style={{ border: "1px solid black" }}
      className="p-2 m-2 rounded-lg flex items-center gap-4"
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
        className="w-5 h-5"
      />
      {/* Título de la tarea */}
      <h2 className={`text-lg ${completed ? "line-through" : ""}`}>{title}</h2>
    </div>
  );
};

export default TaskCard;
