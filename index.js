const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT || 80;

app.use('/assets',express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});