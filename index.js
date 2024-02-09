const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json([
        { id: 3, name: 'sachin', age: 25 },
        { id: 4, name: 'Janmonae', age: 24 },
    ]);
});

app.listen(5500, () => {
    console.log('Server runs on port 5500');
});
