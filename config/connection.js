const { connect, connection } = require('mongoose');

connect(`mongodb://localhost:27017/socialnetworkapi_db`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;