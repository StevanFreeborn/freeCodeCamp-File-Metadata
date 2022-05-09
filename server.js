const EXPRESS = require('express');
const CORS = require('cors');
const MULTER = require('multer');
const UPLOAD = MULTER({ dest: 'uploads/' });

const APP = EXPRESS();

// enable cors
APP.use(CORS());

// serve static files from public directory
APP.use(EXPRESS.static(`public`));

APP.get("/", (req, res) => {
    res.sendFile(`${process.cwd()}/views/index.html`);
});

APP.post('/api/fileinfo', UPLOAD.single('upfile'), (req, res) => {
    console.log(req.file.originalname);
    res.send('hello');
});

const LISTENER = APP.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${LISTENER.address().port}`);
});