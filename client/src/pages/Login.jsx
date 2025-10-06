import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input {...register("email")} placeholder="Email" className="border p-2 mb-2 w-full"/>
        <p className="text-red-500">{errors.email?.message}</p>
        <input {...register("password")} type="password" placeholder="Password" className="border p-2 mb-2 w-full"/>
        <p className="text-red-500">{errors.password?.message}</p>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded mt-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
