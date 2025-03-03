const express = require('express');
const path = require('path'); // Add this line to require the path module

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html",  "forside.html"));
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});