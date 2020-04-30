const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/Routes');

const app = express();

//set up connection
const connect = async () => {
  try {
    const mongoDB = "mongodb://localhost:27017/pokemon";
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB connected...');
  } catch (err) { 
    console.log(err);
  }
};
connect();

app.use(cors());

//route
app.use('/gen', routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));