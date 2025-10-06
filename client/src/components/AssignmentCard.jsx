const AssignmentCard = ({ assignment }) => {
  const deadline = new Date(assignment.deadline);
  const today = new Date();
  const daysLeft = Math.ceil((deadline - today) / (1000*60*60*24));

  const color = daysLeft < 2 ? "bg-red-200" : "bg-green-100";

  return (
    <div className={`p-4 rounded shadow ${color}`}>
      <h2 className="font-bold text-lg">{assignment.title}</h2>
      <p className="italic">{assignment.subject}</p>
      <p>{assignment.description}</p>
      <p>Deadline: {deadline.toLocaleDateString()} ({daysLeft} days left)</p>
    </div>
  );
};

export default AssignmentCard;
