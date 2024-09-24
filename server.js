const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const app = express();
cors = require('cors');
const {connecToDb} = require('./model/database');
const bodyParser = require('body-parser')

const port = process.env.PORT || 8001
connecToDb((err, db) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
  } else {
    console.log('Database connected successfully');

    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/', require('./routes/index'));

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

    app.listen(port, () => {
      console.log(`Web Server is listening at port ${port}`);
    });
  }
});

console.log('After DB connection attempt');

