const express = require("express");
const crypto = require("crypto");
const path = require("path");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// In-memory database for demonstration purposes
const database = [];

app.post("/register", (req, res) => {
    const { credentials } = req.body;

    // Log the incoming credentials
    console.log("Received credentials:", credentials);

    // Hash the concatenated credentials using SHA-256
    const hashedCredentials = crypto.createHash("sha256").update(credentials).digest("hex");

    // Log the hashed credentials
    console.log("Hashed credentials:", hashedCredentials);

    // Store the hashed credentials in the database
    database.push({
        hashedCredentials: hashedCredentials,
        createdAt: new Date()
    });

    // Log the entire in-memory database
    console.log("Current database state:", database);

    res.json({ message: "Credentials stored successfully!" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
