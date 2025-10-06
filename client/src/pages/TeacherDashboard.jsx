import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import AssignmentCard from "../components/AssignmentCard";
import Navbar from "../components/Navbar"; // <-- import Navbar


const TeacherDashboard = () => {
  const { token } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({ title:"", description:"", subject:"", deadline:"" });

  const fetchAssignments = async () => {
    const res = await axios.get("http://localhost:5000/api/assignments", { headers: { Authorization: `Bearer ${token}` } });
    setAssignments(res.data);
  };

  const postAssignment = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/assignments", form, { headers: { Authorization: `Bearer ${token}` } });
    setForm({ title:"", description:"", subject:"", deadline:"" });
    fetchAssignments();
  };

  useEffect(() => { fetchAssignments(); }, []);

  return (
    <div>
    <Navbar />
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard</h1>

      <form onSubmit={postAssignment} className="bg-white p-4 rounded shadow mb-6">
        <input placeholder="Title" className="border p-2 mb-2 w-full" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
        <input placeholder="Subject" className="border p-2 mb-2 w-full" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/>
        <textarea placeholder="Description" className="border p-2 mb-2 w-full" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
        <input type="date" className="border p-2 mb-2 w-full" value={form.deadline} onChange={e=>setForm({...form,deadline:e.target.value})}/>
        <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">Post Assignment</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assignments.map(a => <AssignmentCard key={a._id} assignment={a} />)}
      </div>
    </div>
    </div>
  );
};

export default TeacherDashboard;
