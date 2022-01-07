const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('This is Hello :)');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
