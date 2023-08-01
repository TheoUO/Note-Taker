const express = require('express');
const htmlRoutes = require('./routes/html-routes')
const apiRoutes = require('./routes/api-routes')
const PORT = process.env.PORT || 3001;

const app = express();

// Body parser middleware
// Context from Code Snippet c:/Users/TheoO/Note-Taker/Develop/public/index.html:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes)
app.use(apiRoutes)

// Start the server
app.listen(PORT, () => {
    console.log(`run server on http://localhost:${PORT}`);
});