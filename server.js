const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/Routes');
const config = require('config');

const app = express();

//set up connection
const connect = async () => {
  try {
    const mongoDB = config.get('mongoURI');
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

//static folder
app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server started on port ${port}`));