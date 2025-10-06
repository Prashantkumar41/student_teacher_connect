// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-50 text-center px-4">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Student-Teacher Connect</h1>
//       <p className="text-lg text-gray-600 mb-6">
//         A platform where teachers and students collaborate effectively.
//       </p>
//       <img
//         src="/homepage-illustration.svg"
//         alt="Illustration"
//         className="max-w-md w-full"
//       />
//     </div>
//   );
// }



import Navbar from "../components/Navbar.jsx";
import heroImage from "../assets/heroooo.jpg"; // relative path from the file

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Hero section */}
      <div className="flex flex-col justify-center items-center flex-1 text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Welcome to Student–Teacher Connect
        </h1>
        <p className="text-gray-600 max-w-2xl text-lg mb-8">
          A modern platform for teachers to post assignments and students to stay organized — 
          connecting learning and teaching seamlessly.
        </p>

        <img
          src={heroImage}  // Replace with your uploaded home image path
          alt="Learning together"
          className="w-3/4 md:w-1/2 rounded-lg shadow-md"
        />
      </div>

      {/* Footer (optional) */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © {new Date().getFullYear()} Student–Teacher Connect. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
