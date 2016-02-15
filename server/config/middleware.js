var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app, express){

  app.use(morgan('dev'));

  app.use(express.static(path.join(__dirname,"../../client")));

  var mapRouter = express.Router();

  app.use('/map', mapRouter);

  require('../routes/mapRoutes.js')(mapRouter);


}