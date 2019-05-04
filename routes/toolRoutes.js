'use strict';
module.exports = function(app) {
  var toolObj = require('../controllers/toolController');

  // Routes
  app.route('/')
    .get(toolObj.show_dashboard);
};