// import React, { useContext } from "react"; // ✅ Important: import React
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, AuthContext } from "./context/AuthContext.jsx";

// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import TeacherDashboard from "./pages/TeacherDashboard.jsx";
// import StudentDashboard from "./pages/StudentDashboard.jsx";

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Redirect root / to login */}
//           <Route path="/" element={<Navigate to="/login" />} />

//           {/* Auth routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Dashboard route with role-based protection */}
//           <Route path="/dashboard" element={<PrivateRoute />} />

//           {/* Catch-all unknown routes */}
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// const PrivateRoute = () => {
//   const { user } = useContext(AuthContext); 

//   if (!user) return <Navigate to="/login" />;

//   return user.role === "teacher" ? <TeacherDashboard /> : <StudentDashboard />;
// };

// export default App;




import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import TeacherDashboard from "./pages/TeacherDashboard.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected route */}
          <Route path="/dashboard" element={<PrivateRoute />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// ✅ Role-based Private Route
const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  return user.role === "teacher" ? <TeacherDashboard /> : <StudentDashboard />;
};

export default App;
