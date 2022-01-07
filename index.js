const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('This is awesome ');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// sudo docker build -t node-docker-image .
// docker run -v  /Users/rawscripter/Desktop/Projects/projects/node-docker/:/app -p 3000:3000 -d --name node-docker node-docker-image