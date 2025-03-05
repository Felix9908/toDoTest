interface TaskCardProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

const TaskCard = ({ title, completed, onToggle }: TaskCardProps) => {
  return (
    <div className="p-2 m-2 border border-black rounded-lg flex items-center gap-4">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="w-5 h-5 border border-black rounded bg-white accent-black"
      />
      <h2 className={`text-lg ${completed ? "line-through" : ""}`}>{title}</h2>
    </div>
  );
};

export default TaskCard;
