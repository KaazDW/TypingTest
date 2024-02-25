const express = require('express');
const app = express();
const port = 3000;

// Utilisez cette ligne pour servir les fichiers statiques à partir du répertoire 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});