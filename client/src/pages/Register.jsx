import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  role: yup.string().oneOf(["teacher", "student"]).required()
});

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", data);
      alert("Registered successfully! Login now.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input {...register("name")} placeholder="Name" className="border p-2 mb-2 w-full" />
        <p className="text-red-500">{errors.name?.message}</p>

        <input {...register("email")} placeholder="Email" className="border p-2 mb-2 w-full" />
        <p className="text-red-500">{errors.email?.message}</p>

        <input type="password" {...register("password")} placeholder="Password" className="border p-2 mb-2 w-full" />
        <p className="text-red-500">{errors.password?.message}</p>

        <select {...register("role")} className="border p-2 mb-4 w-full">
          <option value="">Select Role</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        <p className="text-red-500">{errors.role?.message}</p>

        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
