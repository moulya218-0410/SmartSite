
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const projectRoutes = require("./routes/projectRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const documentRoutes = require("./routes/documentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
dotenv.config();
console.log("SERVER FILE LOADED");
console.log(__filename);

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/chatbot", chatbotRoutes);

app.get("/moulya-test", (req, res) => {
    res.send("Moulya Test Working");
});

// Home Route
app.get("/", (req, res) => {
    res.send("SmartSite AI Backend Running");
});

// Server
const PORT = process.env.PORT || 5000;
app.get("/test-project", (req, res) => {
    res.send("Project Test Route Working");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});