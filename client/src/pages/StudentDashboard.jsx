import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import AssignmentCard from "../components/AssignmentCard";
import Navbar from "../components/Navbar";

const StudentDashboard = () => {
  const { token } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchAssignments = async () => {
    const res = await axios.get("http://localhost:5000/api/assignments", { headers: { Authorization: `Bearer ${token}` } });
    setAssignments(res.data);
  };

  useEffect(() => { fetchAssignments(); }, []);

  const filtered = assignments.filter(a => a.subject.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <Navbar />
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>

      <input placeholder="Filter by subject" className="border p-2 mb-4 w-full" value={filter} onChange={e=>setFilter(e.target.value)}/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(a => <AssignmentCard key={a._id} assignment={a} />)}
      </div>
    </div>
    </div>
  );
};

export default StudentDashboard;
