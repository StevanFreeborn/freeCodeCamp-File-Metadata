const EXPRESS = require('express');
const CORS = require('cors');

const APP = EXPRESS();

// enable cors
APP.use(CORS());

// serve static files from public directory
APP.use(EXPRESS.static(`public`));

const LISTENER = APP.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${LISTENER.address().port}`);
});