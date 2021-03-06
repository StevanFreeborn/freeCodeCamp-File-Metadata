const EXPRESS = require('express');
const CORS = require('cors');
const MULTER = require('multer');
const UPLOAD = MULTER({ dest: 'uploads/' });
const FS = require('fs');

const APP = EXPRESS();

// enable cors
APP.use(CORS());

// serve static files from public directory
APP.use(EXPRESS.static(`public`));

APP.get("/", (req, res) => {

    res.sendFile(`${process.cwd()}/views/index.html`);

});

APP.post('/api/fileanalyse', UPLOAD.single('upfile'), (req, res) => {

    res.status(200).json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    });

    return FS.unlink(req.file.path, err => {
        if (err) console.log(err);
    });

});

const LISTENER = APP.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${LISTENER.address().port}`);
});