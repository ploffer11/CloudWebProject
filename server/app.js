const express = require('express');
const app = express();
const router = require('./routes/index');
const port = process.env.PORT || 5000;

app.use(router);

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
