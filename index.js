const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8000;

const upload = multer({ dest: 'uploads/' });

// Serve static files from the "public" directory
// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve index.html at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Endpoint to upload sounds
app.post('/upload', upload.single('sound'), (req, res) => {
    const key = req.body.key.toUpperCase();
    const file = req.file;

    if (!key || !file) {
        return res.status(400).json({ error: 'Missing key or file' });
    }

    const ext = path.extname(file.originalname);
    const newPath = path.join('public/sounds', `${key}${ext}`);

    fs.rename(file.path, newPath, err => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save file' });
        }
        res.json({ key, sound: `/sounds/${key}${ext}` });
    });
});

// Endpoint to get all sound mappings
app.get('/sounds', (req, res) => {
    fs.readdir('public/sounds', (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to list files' });
        }
        const sounds = {};
        files.forEach(file => {
            const key = path.basename(file, path.extname(file));
            sounds[key] = `/sounds/${file}`;
        });
        res.json(sounds);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
