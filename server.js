const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
🚀 Terminal Interface Server Running!
📡 Server started on http://localhost:${PORT}
🔧 Environment: ${process.env.NODE_ENV || 'development'}
⏰ Started at: ${new Date().toLocaleString()}
    
Press Ctrl+C to stop the server
`);
}); 