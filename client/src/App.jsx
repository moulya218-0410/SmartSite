import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import PlotLayout from "./pages/PlotLayout";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Chatbot from "./pages/Chatbot";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

        <Route
          path="/plots/:id"
          element={<PlotLayout />}
        />

        <Route
          path="/booking/:id/:plotNumber"
          element={<Booking />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/chatbot"
          element={<Chatbot />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;