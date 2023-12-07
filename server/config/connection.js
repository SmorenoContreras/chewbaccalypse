const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://markwu1230:markwu1230@cluster0.uod77sy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
