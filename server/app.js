const express = require('express');
const app = express();
const cors = require('cors')
require('./db/mongoose');

const port = process.env.PORT || 3001;
const videoRouter = require('./routers/videoRouter');
app.use(express.json());
app.use(cors())
app.use(videoRouter);


app.listen(port, () => { console.log(`Server is running on ${port}`);})