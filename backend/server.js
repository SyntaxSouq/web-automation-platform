/**
 * PROJECT ENTRY POINT: [server.js](file:///c:/Users/whoami/Desktop/playwrgiht%20-%20Copy%20(2)/backend/server.js)
 * RESPONSIBILITY: Initializes the Express server and core middleware.
 * 
 * SETUP:
 * 1. Express server (Port 3005)
 * 2. CORS configuration for frontend communication.
 * 3. JSON body parsing.
 * 4. Automation routes mounting.
 */

const express = require('express');
const cors = require('cors');
const automationRoutes = require('./routes/automation');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', automationRoutes);

// Serve frontend static files in production
if (process.env.NODE_ENV === 'production') {
  const frontendPath = path.join(__dirname, '..', 'frontend', 'dist');
  app.use(express.static(frontendPath));
  
  // Serve index.html for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3005;
app.listen(PORT, '0.0.0.0', () => console.log(`✓ Server running on port ${PORT}`));
